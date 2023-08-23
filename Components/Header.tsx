import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-blue-500 text-white w-full p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Link href="/" className="text-white font-semibold text-xl">
                    Meine App
                </Link>
            </div>
            <p className="text-right">Willkommen auf unserer App!</p>
        </header>
    );
};

export default Header;
