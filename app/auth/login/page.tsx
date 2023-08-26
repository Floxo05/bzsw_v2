import React from 'react';
import Link from "next/link";
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";

const Login = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Login</h1>
            <div className="mb-6" />
            <form className="w-full max-w-md">
                <InputField label="Benutzername" type="text" name="username" id="username" />
                <InputField label="Passwort" type="password" name="password" id="password" />

                <Button label={"Anmelden"} type={"submit"} className={"mt-3"}/>
            </form>
            <p className="mt-4">
                Noch kein Konto?{' '}
                <Link href="/auth/register" className="text-blue-500">
                    Jetzt registrieren
                </Link>
            </p>
        </>
    );
};

export default Login;
