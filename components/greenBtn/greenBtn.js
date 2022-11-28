import React from 'react';
import { GreenBtnLink } from './styles';

const GreenBtn = ({ style, href, small, children }) => {

    return <GreenBtnLink small={small} style={style || {}} href={href || ""}>
        {children}
    </GreenBtnLink>
}

export default GreenBtn;