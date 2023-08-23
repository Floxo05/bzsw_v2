import "@/assets/globals.css";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Footer from "@/Components/Footer";
import React from "react";
import Header from "@/Components/Header";
import Head from "next/head";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
    icons: "favicon.ico"
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
        <body className={inter.className}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <Header />
            <main className="flex-1 px-4 py-8 text-center flex flex-col items-center justify-center">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    )
}
