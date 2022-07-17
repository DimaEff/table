import styled from "styled-components";
import { PALETTE } from "@shared/themeConsts";

export interface PaperContainerProps {
    width?: string | number;
    height?: string | number;
    isFocused: boolean;
}

export const PaperContainer = styled.div<PaperContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    background-color: ${PALETTE.BACKGROUND.PRIMARY};
    border-radius: 12px;
    padding: 8px;
    ${({ isFocused }) => isFocused && "box-shadow"}: 0px 0px 15px 0px rgba(0, 0, 0, .1);
`;
