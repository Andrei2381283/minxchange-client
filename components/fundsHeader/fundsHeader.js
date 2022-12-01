import React from "react";
import GreenNumber from "../greenNumber/greenNumber";
import { FundsHeaderDiv, FundsHeaderText } from "./styles";

const FundsHeader = ({ number, children }) => {
    return <FundsHeaderDiv>
        <GreenNumber>{number}</GreenNumber>
        <FundsHeaderText>{children}</FundsHeaderText>
    </FundsHeaderDiv>
}

export default FundsHeader;