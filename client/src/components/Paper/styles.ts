import styled from "styled-components";
import { PALETTE } from "@shared/themeConsts";

export const PaperContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 800px;
    max-height: 80vh;
    min-height: 400px;
    background-color: ${PALETTE.BACKGROUND.PRIMARY};
    border-radius: 16px;
    padding: 8px;
`;
