import React from 'react';
import { GreenBtnLink, GreenBtnLink2 } from './styles';

const GreenBtn = ({ $pcElement, $mobileElement, style, href, small, children, onClick }) => {

    const Component = href ? GreenBtnLink : GreenBtnLink2;

    return <Component onClick={onClick} $pcElement={$pcElement} $mobileElement={$mobileElement} small={small ? 1 : 0} style={style || {}} href={href}>
        {children}
    </Component>
}

export default GreenBtn;