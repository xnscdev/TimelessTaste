import React from 'react';

function AccountPage() {
    return (
        <body>
        <div>
            <h1>Welcome _insert name</h1>
        </div>
        <div>
            <label htmlFor="restrictions">Change your dietary restrictions here:</label>
        </div>
        <div>
            <input
                className="shadow appearance-none border rounded w-30% py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" id="restrictions" name="restrictions" placeholder="previous restrictions"></input>
        </div>
        <div>
            <label htmlFor="dropdown">Change your diet style</label>
        </div>
        <div>
            <select>
                <option>Keto</option>
                <option>Mediterranean</option>
                <option>Paleo</option>
            </select>
        </div>

        const nutrients

        <div>
            <label htmlFor="dropdown">Track Nutrients</label>
        </div>
        <div>
            <select>
                <option>Vitamin A</option>
                <option>Vitamin B</option>
                <option>Salt</option>
            </select>
        </div>
        </body>
    );
}

export default AccountPage;