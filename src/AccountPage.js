import React from "react";

function AccountPage() {
    return (
        <>
            <div>
                <div>
                    <h1 className="font-bold text-center text-7xl mb-5 text-blue-900">
                        Welcome
                    </h1>
                </div>
                <div className="flex flex-col justify-center content-center text-center text-blue-900">
                    <div>
                        <label
                            htmlFor="restrictions"
                            className="font-semibold text-5xl"
                        >
                            Specify Your Dietary Restrictions
                        </label>
                    </div>
                    <div>
                        <input
                            className="shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 text-x1 leading-tight focus:outline-none focus:shadow-outline mt-5"
                            type="text"
                            id="restrictions"
                            name="restrictions"
                            placeholder="Enter allergies, restrictions, etc..."
                        />
                    </div>
                    <div className="mt-12">
                        <label
                            htmlFor="dropdown"
                            class="font-semibold text-5xl"
                        >
                            Select Diet
                        </label>
                    </div>
                    <div className="mt-6">
                        <select className="w-1/3 text-xl shadow appearance-none border rounded w-1/2 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option>None</option>
                            <option>Keto</option>
                            <option>Mediterranean</option>
                            <option>Paleo</option>
                            <option>Vegan</option>
                            <option>Carnivore</option>
                            <option>Vegetarian</option>
                        </select>
                    </div>

                    <div className="mt-12">
                        <form>
                            <label class="font-semibold text-5xl">
                                Select Nutrients to Track
                            </label>
                            <div className="mt-4 w-1/3 mx-auto">
                                <div className="flex">
                                    <div className="flex-1">
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="calories"
                                                value="Calories"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="calories"
                                                className="font-bold text-3xl "
                                            >
                                                Calories
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Fat"
                                                value="Fat"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="Fat"
                                                className="font-bold text-3xl "
                                            >
                                                Fat
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Cholesterol"
                                                value="Cholesterol"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="Cholesterol"
                                                class="font-bold text-3xl "
                                            >
                                                Cholesterol
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Sodium"
                                                value="Sodium"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="Sodium"
                                                class="font-bold text-3xl "
                                            >
                                                Sodium
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Carbohydrates"
                                                value="Carbohydrates"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="Carbohydrates"
                                                className="font-bold text-3xl "
                                            >
                                                Carbohydrates
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Dietary Fiber"
                                                value="Dietary Fiber"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="Dietary Fiber"
                                                className="font-bold text-3xl "
                                            >
                                                Dietary Fiber
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Protein"
                                                value="Protein"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="Protein"
                                                class="font-bold text-3xl "
                                            >
                                                Protein
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Calcium"
                                                value="Calcium"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="Calcium"
                                                class="font-bold text-3xl "
                                            >
                                                Calcium
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Iron"
                                                value="Iron"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="Iron"
                                                class="font-bold text-3xl "
                                            >
                                                Iron
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="checkbox"
                                                id="Vitamins"
                                                value="Vitamins"
                                                className="w-6 h-6 mx-4"
                                            />
                                            <label
                                                htmlFor="Vitamins"
                                                class="font-bold text-3xl "
                                            >
                                                Vitamins
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <input
                                type="submit"
                                formAction="#"
                                value="Save Profile"
                                className="text-xl bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;
