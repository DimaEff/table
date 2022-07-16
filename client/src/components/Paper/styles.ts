import styled from "styled-components";
import { BORDER_RADIUS, PALETTE } from "@shared/themeConsts";

export const PaperContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 800px;
    max-height: 80vh;
    min-height: 400px;
    background-color: ${PALETTE.PRIMARY_BACKGROUND_COLOR};
    border-radius: ${BORDER_RADIUS};
    padding: 8px;
`;
