import React, {useRef, useState} from "react";
import OpenAI from "openai";
import {auth, db} from "./firebase";
import {doc, collection, getDoc, setDoc} from "firebase/firestore";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

function HomePage() {
    const [input, setInput] = useState("");
    const [generating, setGenerating] = useState(false);
    const [recipe, setRecipe] = useState(null);
    const [confirmation, setConfirmation] = useState('');
    const [saved, setSaved] = useState(false);
    const messages = useRef([]);

    const getNewRecipe = async () => {
        const uid = auth.currentUser.uid;
        let userDoc;
        try {
            userDoc = await getDoc(doc(db, "users", uid));
        } catch (e) {
            setConfirmation(`Error reading your dietary preferences: ${e}`);
        }
        let dietaryRestrictions = "no dietary restrictions",
            diet = "None",
            nutrients = "do not list any nutrients";
        if (userDoc.exists()) {
            const userData = userDoc.data();
            if (!/^\s*$/.test(userData["dietaryRestrictions"]))
                dietaryRestrictions = userData["dietaryRestrictions"];
            diet = userData["diet"];

            let tempNutrients = [];
            if (userData["trackCalories"]) tempNutrients.push("Calories");
            if (userData["trackFat"]) tempNutrients.push("Fat");
            if (userData["trackCholesterol"]) tempNutrients.push("Cholesterol");
            if (userData["trackSodium"]) tempNutrients.push("Sodium");
            if (userData["trackCarbohydrates"])
                tempNutrients.push("Carbohydrates");
            if (userData["trackDietaryFiber"])
                tempNutrients.push("Dietary Fiber");
            if (userData["trackProtein"]) tempNutrients.push("Protein");
            if (userData["trackCalcium"]) tempNutrients.push("Calcium");
            if (userData["trackIron"]) tempNutrients.push("Iron");
            if (userData["trackVitamins"]) tempNutrients.push("Vitamins");
            if (tempNutrients.length > 0)
                nutrients = tempNutrients.join(', ');
        }
        messages.current = [
            {
                role: "system",
                content:
                    "You are a dietitian that provides nutritional advice and recipe ideas for clients.",
            },
            {
                role: "user",
                content:
                    `I am looking for a recipe related to "${input}" that would be suitable for a senior citizen to buy ingredients for and then make at home. I have dietary restrictions that prevent me from consuming the following products: ${dietaryRestrictions}. Also I am on a "${diet}" diet. Please output a JSON file containing the following information. First, come up with a short name for the recipe. Then add an estimate, with proper units, of the amount of the following nutrients/substances: ${nutrients}. Then add a list of ingredients and preparation instructions, and do not number or add bullet points to each entry. Your output should appear in the following format:\n` +
                    "{\n" +
                    '"name": "Recipe name",\n' +
                    '"nutrients": {\n' +
                    '"Protein": "5 g"\n' +
                    '"Vitamins": "40 mg"\n' +
                    "},\n" +
                    '"ingredients": [\n' +
                    '"Ingredient 1",\n' +
                    '"Ingredient 2",\n' +
                    '"Ingredient 3"\n' +
                    "],\n" +
                    '"instructions": [\n' +
                    '"Step 1",\n' +
                    '"Step 2",\n' +
                    '"Step 3"\n' +
                    "]\n" +
                    "}\n" +
                    "Never output any other context or explanation; just output the contents of the JSON file.",
            },
        ];
        await getRecipe();
    }

    const getAnotherRecipe = async () => {
        setConfirmation('');
        messages.current = [
            {
                role: "user",
                content: "Please generate another recipe. It can be similar or completely unrelated to any of the previous recipes you've generated. Output this new recipe in the same format as before, and remember to just output the contents of the JSON file and not output any other context or explanation."
            },
            ...messages.current
        ];
        await getRecipe();
    }

    const getRecipe = async () => {
        setGenerating(true);
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages.current,
        });
        const output = response.choices[0];
        if (output.finish_reason !== "stop") {
            setConfirmation('Error generating a recipe. Please try again or use different input text.');
            return;
        }

        messages.current = [output.message, ...messages.current];
        setConfirmation('');
        setGenerating(false);
        const r = JSON.parse(output.message.content);
        r['instructions'] = r['instructions'].map(item => item.replace(/^\d+\.\s+/, ''));
        setRecipe(r);
        setSaved(false);
    };

    const saveRecipe = async () => {
        if (saved) {
            setConfirmation('This recipe has already been saved');
            return;
        }
        const uid = auth.currentUser.uid;
        try {
            const c = collection(db, "users", uid, "history");
            await setDoc(doc(c), recipe);
            setConfirmation('Successfully saved recipe!');
            setSaved(true);
        } catch (e) {
            setConfirmation(`Error saving recipe: ${e}`);
        }
    };

    let content;
    if (recipe) {
        const nutrients = Object.keys(recipe['nutrients']).map(k => (
            <tr key={k}>
                <td>{k}</td>
                <td>{recipe['nutrients'][k]}</td>
            </tr>
        ));
        const ingredients = recipe['ingredients'].map(step => <li key={step}>{step}</li>);
        const instructions = recipe['instructions'].map(step => <li key={step}>{step}</li>);
        content = (
            <>
                <h3 className="text-center text-3xl font-medium my-10 text-blue-900">Here's your recipe:</h3>
                <h3 className="text-center text-5xl font-medium my-10 text-blue-900">{recipe.name}</h3>
                <div className="text-center space-x-10">
                    <button
                        onClick={saveRecipe}
                        className="bg-green-600 hover:bg-green-400 rounded mb-10 text-white text-xl px-6 py-3">
                        Save Recipe
                    </button>
                    <button
                        onClick={getAnotherRecipe}
                        className={
                            "rounded mb-10 text-white text-xl px-6 py-3 " + (generating
                                ? "cursor-not-allowed bg-blue-300"
                                : "focus:ring-blue-300 bg-blue-500 hover:bg-blue-300")}
                        disabled={generating}
                    >{generating ? 'Generating...' : 'Generate Another Recipe'}</button>
                    <button
                        onClick={() => setRecipe(null)}
                        className="bg-orange-500 hover:bg-orange-300 rounded mb-10 text-white text-xl px-6 py-3"
                    >Try a Different Dish
                    </button>
                </div>
                <div
                    className={"text-center mb-10 text-lg " + (confirmation.includes("Error") ? "text-red-500" : "text-green-700")}>{confirmation}</div>
                <div className="flex flex-wrap lg:w-2/3 mx-auto text-2xl mb-24">
                    <div className="w-full xl:w-1/2 px-8">
                        <h4 className="text-center text-3xl text-white font-medium mb-10 bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 p-4">Nutrients</h4>
                        <table className="w-full table-auto">
                            <tbody>{nutrients}</tbody>
                        </table>
                        <h4 className="text-center text-3xl text-white font-medium my-10 bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 p-4">Ingredients</h4>
                        <ul className="list-disc list-inside text-justify mb-10">{ingredients}</ul>
                    </div>
                    <div className="w-full xl:w-1/2 px-8">
                        <h4 className="text-center text-3xl text-white font-medium mb-10 bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 p-4">Instructions</h4>
                        <ol className="list-decimal list-inside text-justify space-y-8">{instructions}</ol>
                    </div>
                </div>
            </>
        );
    } else {
        content = (
            <div className="text-center">
                <form onSubmit={async e => {
                    e.preventDefault();
                    await getNewRecipe();
                }}>
                    <h2 className="text-5xl font-medium my-10 text-blue-900">
                        Welcome! What would you like to eat today?
                    </h2>
                    <div className="w-1/2 mx-auto">
                        <input
                            type="text"
                            id="text-input"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring text-2xl focus:ring-blue-500"
                            placeholder="Enter a food..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            className={
                                "w-1/3 text-2xl text-white py-2 px-4 rounded-md focus:outline-none focus:ring" +
                                (generating
                                    ? "cursor-not-allowed bg-blue-400"
                                    : "focus:ring-blue-300 bg-blue-600 hover:bg-blue-700")
                            }
                            disabled={generating}
                        >
                            {generating ? "Generating..." : "Generate Recipes!"}
                        </button>
                    </div>
                    <div
                        className={"text-center mt-6 text-lg " + (confirmation.includes("Error") ? "text-red-500" : "text-green-700")}>{confirmation}</div>
                </form>
            </div>
        );
    }

    return (
        <>
            <div className="text-center">
                <h2 className="text-8xl font-bold text-blue-900 mb-10">
                    Timeless Taste
                </h2>
            </div>
            {content}
        </>
    );
}

export default HomePage;
