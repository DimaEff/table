import styled from "styled-components";
import { PALETTE } from "@shared/themeConsts";

export const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${PALETTE.BACKGROUND.SECONDARY};
`;
