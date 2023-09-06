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
            className={`text-white rounded ${className ? className : ''}`}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default Button;