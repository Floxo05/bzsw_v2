import React from 'react';
import Link from "next/link";

const Login = () => {
    return (
        <main className="flex-1 px-4 py-8 text-center flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold mb-4">Login</h1>
            <div className="mb-6" />
            <form className="w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-white">
                        Benutzername:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full bg-gray-800 border rounded py-2 px-3 text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-white">
                        Passwort:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full bg-gray-800 border rounded py-2 px-3 text-white"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded"
                >
                    Anmelden
                </button>
            </form>
            <p className="mt-4">
                Noch kein Konto?{' '}
                <Link href="/auth/register" className="text-blue-500">
                    Jetzt registrieren
                </Link>
            </p>
        </main>
    );
};

export default Login;
