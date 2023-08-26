"use client";

import React, {useState} from 'react';
import Button from "@/Components/Button";

type DrinkCategory = 'Longdrink' | 'Bier' | 'Afg';


const Auswahl: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories: DrinkCategory[] = ['Longdrink', 'Bier', 'Afg'];

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    const renderDrinkButtons = () => {
        if (selectedCategory === '') {
            return null;
        }

        // return (
        //     <>
        //         {selectedCategory}
        //     </>
        // )

        // const drinksByCategory: { Longdrink: string[], Bier: string[], Afg: string[] } = {
        //     Longdrink: ['Mojito', 'Piña Colada', 'Sex on the Beach'],
        //     Bier: ['Pilsner', 'Weizenbier', 'IPA'],
        //     Afg: ['Saft', 'Wasser', 'Eistee'],
        // };

        const drinksByCategory: { [key in DrinkCategory]: string[] } = {
            Longdrink: ['Mojito', 'Piña Colada', 'Sex on the Beach'],
            Bier: ['Pilsner', 'Weizenbier', 'IPA'],
            Afg: ['Saft', 'Wasser', 'Eistee'],
        };

        if (selectedCategory in drinksByCategory) {

            // const drinks: string[] = selectedCategory ? drinksByCategory[selectedCategory] : [];

        }

        return (
            <>
                {drinksByCategory}
            </>
        )

        //
        // return (
        //     <div className="mt-4">
        //         {drinks.map((drink) => (
        //             <button
        //                 key={drink}
        //                 className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2 mb-2"
        //             >
        //                 {drink}
        //             </button>
        //         ))}
        //     </div>
        // );
    };

    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Getränkeauswahl</h1>
            {categories.map((category) => (
                <Button
                    label={category}
                    type={"button"}
                    handleClick={() => handleCategorySelect(category)}
                    btnKey={category}
                    className={"w-44 mb-4"}/>
            ))}
            {renderDrinkButtons()}
        </>
    );
};

export default Auswahl;
