"use client";

import React, {useState} from 'react';
import Link from "next/link";

const NavigationsMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative">
            <button
                className="text-white sm:hidden"
                onClick={toggleMenu}
            >
                Menü
            </button>

            {menuOpen && (
                <nav className="fixed top-16 right-0 bg-blue-500 text-white w-48 p-2 rounded shadow-md">
                    <Link href="/account" className="block px-2 py-1">
                        Account
                    </Link>
                    <Link href="/verlauf" className="block px-2 py-1">
                        Verlauf
                    </Link>
                    <Link href="/system" className="block px-2 py-1">
                        Verlauf
                    </Link>
                    <Link href="/events" className="block px-2 py-1">
                        Verlauf
                    </Link>
                    <Link href="/nutzer" className="block px-2 py-1">
                        Verlauf
                    </Link>
                    <Link href="/verwaltung" className="block px-2 py-1">
                        Verlauf
                    </Link>
                </nav>
            )}
        </div>
    );
};

export default NavigationsMenu;
