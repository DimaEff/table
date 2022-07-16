import React, { PropsWithChildren } from "react";
import { PaperContainer } from "@components/Paper/styles";

const Paper: React.FC<PropsWithChildren> = ({ children }) => {
    return <PaperContainer>{children}</PaperContainer>;
};

export default Paper;
