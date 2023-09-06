"use client";

import React, {useState} from 'react';
import Button from "@/Components/Button";
import DrinksAuswahl from "@/Components/Auswahl/DrinksAuswahl";

type DrinkCategory = 'Longdrink' | 'Bier' | 'Afg';


const Auswahl: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories: DrinkCategory[] = ['Longdrink', 'Bier', 'Afg'];

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    const drinksByCategory: { [key in DrinkCategory]: string[] } = {
        Longdrink: ['Mojito', 'Piña Colada', 'Sex on the Beach'],
        Bier: ['Pilsner', 'Weizenbier', 'IPA'],
        Afg: ['Saft', 'Wasser', 'Eistee'],
    };

    return (
        <>
            <h1 className="text-3xl font-semibold mb-4">Getränkeauswahl</h1>
            {categories.map((category: DrinkCategory) => (
                <div key={category}>
                    <Button
                        label={category}
                        type={"button"}
                        handleClick={() => handleCategorySelect(category)}
                        btnKey={category}
                        className={"w-44 my-2 bg-blue-500 hover:bg-blue-600 sm:py-1 py-2"}
                    />

                    {selectedCategory === category &&
                        (
                            <div className={"flex flex-col items-center justify-center mb-4"}>
                                <DrinksAuswahl labels={drinksByCategory[category]} category={category} />
                            </div>
                        )
                    }
                </div>
            ))}
        </>
    );
};

export default Auswahl;
