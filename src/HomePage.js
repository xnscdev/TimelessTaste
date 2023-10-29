import React, {useState} from "react";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

function HomePage() {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const [generating, setGenerating] = useState(false);

    const getRecipe = async () => {
        const messages = [
            {
                role: 'system',
                content: 'You are a dietitian that provides nutritional advice and recipe ideas for clients.'
            },
            {
                role: 'user',
                content: 'I am looking for a recipe related to "salad" that would be suitable for a senior citizen to buy ingredients for and then make at home. I have dietary restrictions that prevent me from consuming the following products: nuts, soy. Also I am on a "none" diet. Please output a JSON file containing the following information. First, come up with a short name for the recipe. Then add an estimate, with proper units, of the amount of the following nutrients: Protein, Cholesterol. Then add a list of ingredients and preparation instructions, and do not number or add bullet points to each entry. Your output should appear in the following format:\n' +
                    '{\n' +
                    '"name": "Recipe name",\n' +
                    '"nutrients": {\n' +
                    '"Protein": "5 g"\n' +
                    '"Vitamins": "40 mg"\n' +
                    '},\n' +
                    '"ingredients": [\n' +
                    '"Ingredient 1",\n' +
                    '"Ingredient 2",\n' +
                    '"Ingredient 3"\n' +
                    '],\n' +
                    '"instructions": [\n' +
                    '"Step 1",\n' +
                    '"Step 2",\n' +
                    '"Step 3"\n' +
                    ']\n' +
                    '}\n' +
                    'Never output any other context or explanation; just output the contents of the JSON file.'
            },
        ];
        setGenerating(true);
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages,
        });
        console.log(response.choices);
        const output = response.choices[0];
        if (output.finish_reason !== 'stop') {
            setError(true);
            return;
        }

        setError(false);
        setGenerating(false);
        console.log(output.message.content);
    };

    return (
        <>
            <div className="text-center">
                <h2 className="text-8xl font-bold text-blue-900 mb-10">
                    Timeless Taste
                </h2>
            </div>
            <div className="text-center">
                <div className="text-center">
                    <h2 className="text-5xl font-medium my-10 text-blue-900">
                        Welcome! What would you like to eat today?
                    </h2>
                    <div className="mb-4 w-1/2 mx-auto">
                        <input
                            type="text"
                            id="text-input"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring text-2xl focus:ring-blue-500"
                            placeholder="Enter a food..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className={"w-1/3 text-2xl text-white py-2 px-4 rounded-md focus:outline-none focus:ring" + (generating ? "cursor-not-allowed bg-blue-400" : "focus:ring-blue-300 bg-blue-600 hover:bg-blue-700")}
                            onClick={getRecipe}
                            disabled={generating}
                        >
                            {generating ? 'Generating...' : 'Generate Recipes!'}
                        </button>
                    </div>
                    {error && <div className="text-center text-lg">A recipe could not be generated with your input. Please try again or use different input text.</div>}
                </div>
            </div>
        </>
    );
}

export default HomePage;
