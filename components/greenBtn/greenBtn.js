import React from 'react';
import { GreenBtnLink } from './styles';

const GreenBtn = ({ style, href, small, children }) => {

    return <GreenBtnLink small={small ? 1 : 0} style={style || {}} href={href || ""}>
        {children}
    </GreenBtnLink>
}

export default GreenBtn;