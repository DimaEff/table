import React, { PropsWithChildren } from "react";
import { PaperContainer, PaperContainerProps } from "@components/Paper/styles";

interface PaperProps extends Omit<PaperContainerProps, "isFocused">{
    isFocused?: boolean;
}

const Paper: React.FC<PaperProps & PropsWithChildren> = ({ children, isFocused, ...props }) => {
    return <PaperContainer isFocused={!!isFocused} {...props}>{children}</PaperContainer>;
};

export default Paper;
