import React from 'react';
import { ThemeContext, themes } from '../../theme/theme';
import { LightBtnLink } from './styles';

const LightBtn = ({ $pcElement, $mobileElement, style, href, children, onClick }) => {

    return <ThemeContext.Consumer>
        {({theme}) => 
            <LightBtnLink onClick={onClick} $pcElement={$pcElement} $mobileElement={$mobileElement} theme={theme.name} color={theme == themes.light ? "#162329" : "#38E7BA"} style={style || {}} href={href || ""}>
                {children}
            </LightBtnLink>
        }
    </ThemeContext.Consumer>
}

export default LightBtn;