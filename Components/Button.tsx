import React from 'react';

interface ButtonProps {
    label: string;
    type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ label, type }) => {
    return (
        <button
            type={type}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded mt-3"
        >
            {label}
        </button>
    );
};

export default Button;