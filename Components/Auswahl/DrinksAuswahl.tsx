"use client";

import React, {useEffect, useState} from 'react';
import Button from "@/Components/Button";

interface DrinksAuswahlProps {
    labels?: string[],
    category: string
}

const DrinksAuswahl = ({labels, category}: DrinksAuswahlProps) => {
    // let storageData: LocalStorageInterface = JSON.parse(localStorage.getItem("data") || "{}");

    const data = JSON.parse(localStorage.getItem("data") || "{}");
    const [storageData, setStorageData] = useState<LocalStorageInterface>(data);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(storageData));

    }, [storageData]);
    const handleButtonClick = (label: string) => {

        setStorageData((prevState) => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [label]: (prevState[category]?.[label] || 0) + 1,
            }
        }));
    }

    if (labels === undefined) {
        return <></>;
    }

    return (
        <>
            {labels.map((label: string) => (
                <Button
                    label={`${label} ${storageData[category]?.[label] > 0 ? ("(" + storageData[category][label] + ")") : ''}`}
                    type={"button"}
                    btnKey={label}
                    key={label}
                    className={"my-1"}
                    handleClick={() => handleButtonClick(label)}
                />
            ))}
        </>
    );
};

export default DrinksAuswahl;
