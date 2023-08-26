"use client";

import React from 'react';

interface ButtonProps{
    label: string;
    handleClick?: () => void;
    type: "button" | "submit" | "reset";
    btnKey?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, type , handleClick, btnKey, className}) => {
    return (
        <button
            type={type}
            className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded ${className}`}
            onClick={handleClick}
            key={btnKey}
        >
            {label}
        </button>
    );
};

export default Button;