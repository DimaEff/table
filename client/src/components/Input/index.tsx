import React, { useState } from "react";

interface InputProps {
    value: string;
    setValue: React.Dispatch<string>;
}

const Input: React.FC<InputProps> = ({ value, setValue }) => {
    const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <input value={value} onChange={handleSetValue} type="text" />
        </div>
    );
};

export default Input;
