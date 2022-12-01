import React from 'react';
import { ThemeContext, themes } from '../../theme/theme';
import { LightBtnLink } from './styles';

const LightBtn = ({ style, href, children }) => {

    return <ThemeContext.Consumer>
        {({theme}) => 
            <LightBtnLink theme={theme.name} color={theme == themes.light ? "#162329" : "#38E7BA"} style={style || {}} href={href || ""}>
                {children}
            </LightBtnLink>
        }
    </ThemeContext.Consumer>
}

export default LightBtn;