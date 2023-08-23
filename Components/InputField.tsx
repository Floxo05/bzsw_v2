import React from 'react';

interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    id: string;
}

const InputField:React.FC<InputFieldProps> = ({label, type, name, id}) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-white">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                className="w-full bg-gray-800 border rounded py-2 px-3 text-white"
            />
        </div>
    );
};

export default InputField;
