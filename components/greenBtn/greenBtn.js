import React from 'react';
import { GreenBtnLink } from './styles';

const GreenBtn = ({ $pcElement, $mobileElement, style, href, small, children, onClick }) => {

    return <GreenBtnLink onClick={onClick} $pcElement={$pcElement} $mobileElement={$mobileElement} small={small ? 1 : 0} style={style || {}} href={href || ""}>
        {children}
    </GreenBtnLink>
}

export default GreenBtn;