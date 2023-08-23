import React from 'react';
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 p-4 w-full text-center">
            <div className="flex justify-center space-x-4">
                <Link href={"/impressum"}>Impresseum</Link>
                <Link href={"/datenschutz"}>Datenschutzerklärung</Link>
            </div>
        </footer>
    );
};

export default Footer;
