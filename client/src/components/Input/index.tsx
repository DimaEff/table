import React, { useState } from "react";
import { InputContainer, InputElement } from "@components/Input/styles";

interface InputProps {
    value: string;
    placeholder?: string;
    setValue: React.Dispatch<string>;
}

const Input: React.FC<InputProps> = ({
    value,
    placeholder,
    setValue,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <InputContainer isFocused={isFocused}>
            <InputElement
                value={value}
                placeholder={placeholder}
                onChange={handleSetValue}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                type={"text"}
            />
        </InputContainer>
    );
};

export default Input;
