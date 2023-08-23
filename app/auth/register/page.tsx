import React from 'react';
import InputField from "@/Components/InputField";
import Button from "@/Components/Button";
import Link from "next/link";

const Register: React.FC = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Registrierung</h1>
            <form className="w-full max-w-md">
                <InputField label="Benutzername" type="text" name="username" id="username"/>
                <InputField label="Passwort" type="password" name="password" id="password"/>
                <InputField
                    label="Passwort wiederholen"
                    type="password"
                    name="passwordRepeat"
                    id="passwordRepeat"
                />
                <Button label="Registrieren" type="submit"/>
            </form>
            <p className="mt-4">
                Schon ein Konto?{' '}
                <Link href="/auth/login" className="text-blue-500">Hier anmelden</Link>
            </p>
        </>
    );
};

export default Register;
