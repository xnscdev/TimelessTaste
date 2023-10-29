import React, { useState } from "react";

function SignInForm({ callback, register, error }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="flex">
                <div>
                  
                </div>
                <div className="flex flex-col text-2xl justify-center items-center h-screen bg-blue-900">
                    <div>
                        <p className="text-white font-bold mb-10 text-5xl">
                            TimelessTaste
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
                        <div className="mb-4">
                            <div className="text-5xl mb-4 text-center">
                                Sign In
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
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() => callback(email, password)}
                            >
                                Sign In
                            </button>
                            <button
                                className="text-blue-500 hover:underline focus:outline-none"
                                onClick={register}
                            >
                                Register
                            </button>
                        </div>
                        {error && (
                            <div className="pt-8 text-lg text-red-500">
                                Sign in failed: {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInForm;
