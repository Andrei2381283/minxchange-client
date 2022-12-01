import React from "react";
import { ThemeContext } from "../../theme/theme";
import { GreenNumberDiv } from "./styles";

const GreenNumber = ({ children }) => {
    return <ThemeContext.Consumer>
        {({ theme }) => (
            <GreenNumberDiv theme={theme.name}>
                {children}
            </GreenNumberDiv>
        )}
    </ThemeContext.Consumer>
}

export default GreenNumber;