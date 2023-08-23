import React from "react";
import Footer from "@/Components/Footer";

const Home: React.FC = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Herzlich willkommen!</h1>
            <p className="text-lg mb-6">
                Wir freuen uns, dich auf unserer Plattform begrüßen zu dürfen.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
                Zum Login
            </button>
        </>
    )
}

export default Home;