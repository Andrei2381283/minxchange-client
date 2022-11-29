import React, { useState } from 'react';
import { FaqQuestionBlock, FaqQuestionPlusBtn, FaqQuestionTitle, FaqQuestionTopDiv } from './styles';

const FaqQuestion = ({ style, title, children }) => {

    const [isOpen, setOpen] = useState(false);

    return <FaqQuestionBlock onClick={() => setOpen(!isOpen)}>
        <FaqQuestionTopDiv>
            <FaqQuestionTitle>{title}</FaqQuestionTitle>
            <FaqQuestionPlusBtn>+</FaqQuestionPlusBtn>
        </FaqQuestionTopDiv>
        {isOpen && <div style={{marginTop: "1rem"}}>{children}</div> || ""}
    </FaqQuestionBlock>
}

export default FaqQuestion;