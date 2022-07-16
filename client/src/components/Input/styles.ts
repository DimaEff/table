import styled  from "styled-components";
import { PALETTE } from "@shared/themeConsts";
import { HEIGHT, HORIZONTAL_PADDING, VERTICAL_PADDING, WIDTH } from "@components/Input/consts";

interface InputContainerProps {
    isFocused: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    border: 1px solid ${({ isFocused }) => isFocused ? PALETTE.MAIN.SECONDARY : PALETTE.MAIN.PRIMARY};
    border-radius: 12px;
    padding: ${VERTICAL_PADDING}px ${HORIZONTAL_PADDING}px;
    background-color: ${PALETTE.BACKGROUND.PRIMARY};
`;

export const InputElement = styled.input.attrs({
    placeholderTextColor: "red",
})`
    border: none;
    outline: none;
    width: ${WIDTH};
    height: ${HEIGHT};

    ::placeholder,
    ::-webkit-input-placeholder {
        opacity: 1;
        color: ${PALETTE.MAIN.DISABLED};
    }
    :-ms-input-placeholder {
        opacity: 1;
        color: ${PALETTE.MAIN.DISABLED};
    }
`;
