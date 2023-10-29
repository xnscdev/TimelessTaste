import React from "react";
import OpenAI from "openai";

// const openai = new OpenAI({
//     apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//     dangerouslyAllowBrowser: true
// });

function HomePage() {
  // const getRecipe = async () => {
  //     // const initialPrompt = {
  //     //     role: 'system',
  //     //     content: 'You are a helpful mystic who does not reference itself and helps interpret dreams.'
  //     // };
  //     const messages = [
  //         {role: 'user', content: 'What is the capital of the United States?'}
  //     ];
  //     const response = await openai.chat.completions.create({
  //         model: 'gpt-3.5-turbo',
  //         messages
  //     });
  //     console.log(response.choices);
  // };

  return (
    <>
      <div className="text-center">
        <h2 className="text-8xl font-bold text-blue-900">Timeless Taste</h2>
        <h2 className="text-6xl font-semibold mt-2 text-blue-900 ">Welcome</h2>
      </div>
      <div className="text-center">
        <div className="text-center">
          <h2 className="text-4xl font-medium mt-10 text-blue-900">
            What would you like to eat today?
          </h2>
          <form onSubmit=''>
            <div className="mb-4">
              <label
                htmlFor="text-input"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                
              </label>
              <input
                type="text"
                id="text-input"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 mt-5"
                placeholder="Type something..."
                // value={inputValue}
                // onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default HomePage;
