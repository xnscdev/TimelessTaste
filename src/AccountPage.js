import React from "react";

function AccountPage() {
    return (
        <body>
            <div>
                <h1 className="font-bold text-center text-5xl mb-5">Welcome</h1>
            </div>
            <div className="flex flex-col justify-center content-center text-center">
                <div>
                    <label
                        htmlFor="restrictions"
                        className="font-bold text-3xl"
                    >
                        Change your dietary restrictions here
                    </label>
                </div>
                <div>
                    <input
                        className="shadow appearance-none border rounded w-30% py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-5"
                        type="text"
                        id="restrictions"
                        name="restrictions"
                        placeholder="Enter restrictions"
                    ></input>
                </div>
                <div className="mt-8">
                    <label htmlFor="dropdown">Select Diet</label>
                </div>
                <div>
                    <select>
                        <option>Keto</option>
                        <option>Mediterranean</option>
                        <option>Paleo</option>
                        <option>Vegan</option>
                        <option>Carnivore</option>
                        <option>Vegetarian</option>
                    </select>
                </div>

                <div>
                    <form>
                        <label>Select Nutrients to Track</label>

                        <div>
                            <input
                                type="checkbox"
                                id="calories"
                                value="Calories"
                            ></input>
                            <label htmlFor="calories">Calories</label>
                            <input type="checkbox" id="Fat" value="Fat"></input>
                            <label htmlFor="Fat">Fat</label>
                            <input
                                type="checkbox"
                                id="Cholestrol"
                                value="Cholestrol"
                            ></input>
                            <label htmlFor="Cholestrol">Cholestrol</label>{" "}
                            <br></br>
                            <input
                                type="checkbox"
                                id="Sodium"
                                value="Sodium"
                            ></input>
                            <label htmlFor="Sodium">Sodium</label>
                            <input
                                type="checkbox"
                                id="Carbohydrates"
                                value="Carbohydrates"
                            ></input>
                            <label htmlFor="Carbohydrates">Carbohydrates</label>
                            <input
                                type="checkbox"
                                id="Dietary Fiber"
                                value="Dietary Fiber"
                            ></input>
                            <label htmlFor="Dietary Fiber">Dietary Fiber</label>{" "}
                            <br></br>
                            <input
                                type="checkbox"
                                id="Protein"
                                value="Protein"
                            ></input>
                            <label htmlFor="Protein">Protein</label>
                            <input
                                type="checkbox"
                                id="Calcium"
                                value="Calcium"
                            ></input>
                            <label htmlFor="Calcium">Calcium</label>
                            <input
                                type="checkbox"
                                id="Iron"
                                value="Iron"
                            ></input>
                            <label htmlFor="Iron">Iron</label>
                        </div>
                        <input
                            type="submit"
                            formAction="#"
                            value="Enter"
                            className="border border-3 mt-5"
                        ></input>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default AccountPage;
