import React, { useState } from "react";
import MainSidebar from "./MainSidebar";

function SignInForm({ callback, register, error }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="flex">
                <MainSidebar />
                <div className="flex flex-1 flex-col text-2xl justify-center items-center h-screen">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            callback(email, password);
                        }}
                    >
                        <div className="mb-4">
                            <div className="text-5xl mb-8 text-center font-semibold">
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
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                        {error && (
                            <div className="text-2xl text-red-500 mb-6">
                                Sign in failed: {error}
                            </div>
                        )}

                        <button
                            className="text-blue-500 hover:underline focus:outline-none"
                            onClick={register}
                        >
                            Don't have an account? Register!
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignInForm;
