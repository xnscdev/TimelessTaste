import React, {useState} from "react";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

function HomePage() {
    const [input, setInput] = useState('');
    const getRecipe = async () => {
        const messages = [
            {
                role: "user",
                content: "What is the capital of the United States?",
            },
        ];
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages,
        });
        console.log(response.choices);
    };

    return (
        <>
            <div className="text-center">
                <h2 className="text-8xl font-bold text-blue-900">
                    Timeless Taste
                </h2>
                <h2 className="text-6xl font-semibold mt-2 text-blue-900 ">
                    Welcome
                </h2>
            </div>
            <div className="text-center">
                <div className="text-center">
                    <h2 className="text-4xl font-medium my-10 text-blue-900">
                        What would you like to eat today?
                    </h2>
                    <div className="mb-4 w-1/2 mx-auto">
                        <input
                            type="text"
                            id="text-input"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Type a dish..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="text-xl bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                            onClick={getRecipe}
                        >
                            Generate Recipes!
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
