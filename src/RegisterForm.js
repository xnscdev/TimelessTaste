import React, { useState } from "react";

function RegisterForm({ callback, signIn, error }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <>
            <div className="flex">
                <div className="flex flex-col flex-1 justify-center items-center bg-blue-900">
                    <div className="p-12">
                        <p className="font-bold mb-5 text-5xl text-white">
                            TimelessTaste
                        </p>
                        <p className="text-3xl text-white">
                            Get custom-tailored recipes. Enter diet, restrictions, and nutrients to create
                            your perfect recipe for any occasion.
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 flex-col text-2xl justify-center items-center h-screen">
                    {/* <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"> */}
                        <div className="mb-4">
                            <div className="text-5xl mb-4 text-center">
                                Register
                            </div>
                            <label
                                className="block text-gray-700 text-lg font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-lg font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-lg font-bold mb-2"
                                htmlFor="confirm"
                            >
                                Confirm Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="confirm"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-8 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() =>
                                    callback(email, password, confirm)
                                }
                            >
                                Register
                            </button>
                            
                        </div>
                        {error && (
                            <div className="text-2xl text-red-500 mb-6">
                                Registration failed: {error}
                            </div>
                        )}
                        <button
                                className="text-blue-500 hover:underline focus:outline-none"
                                onClick={signIn}
                            >
                                Already have an account? Log in here!
                            </button>
                    </div>
                    
                
            </div>
        </>
    );
}

export default RegisterForm;
