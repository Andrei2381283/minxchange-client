import React, { useEffect, useState } from 'react';
import { FaqQuestionAnswer, FaqQuestionBlock, FaqQuestionPlusBtn, FaqQuestionTitle, FaqQuestionTopDiv } from './styles';

const FaqQuestion = ({ style, title, children }) => {

    const [isOpen, setOpen] = useState(false);

    const [textIsOpen, textSetOpen] = useState(false);

    const onClick = function(e){
        if(isOpen){
            if(!textIsOpen)  return;
            textSetOpen(!isOpen);
            setTimeout(() => {
                setOpen(!isOpen);
            },200)
            return
        }
        textSetOpen(!isOpen);
        setOpen(!isOpen);
    }

    return <FaqQuestionBlock className='faq-block' onClick={onClick}>
        <FaqQuestionTopDiv>
            <FaqQuestionTitle>{title}</FaqQuestionTitle>
            <FaqQuestionPlusBtn>+</FaqQuestionPlusBtn>
        </FaqQuestionTopDiv>
        {isOpen && <FaqQuestionAnswer open={isOpen && textIsOpen} className='faq-answer'><span>{children}</span></FaqQuestionAnswer> || ""}
    </FaqQuestionBlock>
}

export default FaqQuestion;