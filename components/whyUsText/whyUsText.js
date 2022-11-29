import Image from 'next/image';
import React from 'react';
import whyUsMark from "../../assets/whyUsMark.svg";
import { WhyUsTextDiv, WhyUsTextSpan } from './styles';

const WhyUsText = ({children, style}) => {

    return <WhyUsTextDiv style={style || {}}>
        <Image src={whyUsMark} alt="" />
        <WhyUsTextSpan>{children}</WhyUsTextSpan>
    </WhyUsTextDiv>
}

export default WhyUsText;