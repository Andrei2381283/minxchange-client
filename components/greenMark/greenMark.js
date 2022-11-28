import React from 'react';
import { GreenBtnLink } from './styles';

const GreenMark = ({ style, href, children }) => {

    return <GreenBtnLink style={style || {}} href={href || ""}>
        {children}
    </GreenBtnLink>
}

export default GreenMark;