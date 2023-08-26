"use client";

import React, {useState} from 'react';
import Link from "next/link";

const NavigationsMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const isLoggedIn: boolean = true;

    return (
        <div className="relative">

            {isLoggedIn && (
                <button
                    className="text-white ml-2"
                    onClick={toggleMenu}
                >
                    Menü
                </button>
            )}

            {menuOpen && (
                <nav className="fixed top-16 right-0 bg-blue-500 text-white w-48 p-2 rounded shadow-md">
                    <Link href="/account" className="nav_link">
                        Account
                    </Link>
                    <Link href="/verlauf" className="nav_link">
                        Verlauf
                    </Link>
                    <Link href="/system" className="nav_link">
                        System
                    </Link>
                    <Link href="/events" className="nav_link">
                        Events
                    </Link>
                    <Link href="/nutzer" className="nav_link">
                        Nutzer
                    </Link>
                    <Link href="/verwaltung" className="nav_link">
                        Verwaltung
                    </Link>
                </nav>
            )}
        </div>
    );
};

export default NavigationsMenu;
