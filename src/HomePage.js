import React from 'react';
import OpenAI from 'openai';

// const openai = new OpenAI({
//     apiKey: process.env.REACT_APP_OPENAI_API_KEY
// });

// export async function POST(req) {
//     const {messages} = await req.json();
//     const initialPrompt = {
//         role: 'system',
//         content: 'You are a helpful mystic who does not reference itself and helps interpret dreams.'
//     };
//     const messagesWithInitialPrompt = [initialPrompt, ...messages];
//     const response = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: messagesWithInitialPrompt
//     });
//     console.log(response.choices);
// }


function HomePage() {
    return (
        <>
            <div className="text-center">
                <h2 className="text-8xl font-bold text-blue-900">Timeless Taste</h2>
                <h2 className="text-6xl font-semibold mt-2 text-blue-900 ">Welcome</h2>
            </div>

            <div className="text-center">
                <h2 className="text-4xl font-medium mt-10 text-blue-900">What would you like to eat today?</h2>
                <form>
                    <input type="text" className='border border-3 mt-5'></input>
                    <input type="submit"></input>
                </form>
            </div>
        </>
    );
}

export default HomePage;