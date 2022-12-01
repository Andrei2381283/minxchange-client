import React, { useEffect, useState } from 'react';
import { FaqQuestionAnswer, FaqQuestionBlock, FaqQuestionPlusBtn, FaqQuestionTitle, FaqQuestionTopDiv } from './styles';

const FaqQuestion = ({ style, title, children }) => {

    const [isOpen, setOpen] = useState(false);

    const onClick = function(e){
        console.log(e);
        if(isOpen){
            const element = e.nativeEvent.path.find((elem) => elem.classList.contains("faq-block")).children[1];
            element.style.opacity = "0";
            element.style.marginTop = "0";
            element.style.height = "0";
            setTimeout(() => {
                setOpen(!isOpen);
            }, 300)
            return;
        }
        setOpen(!isOpen);
    }

    useEffect(() => {
        Array.prototype.forEach.call(document.getElementsByClassName("faq-answer"), function(elem){
            console.log(elem.offsetHeight);
            const height = elem.offsetHeight;
            elem.style.height = '0';
            setTimeout(() => {
                elem.style.opacity = "1";
                elem.style.height = height + "px";
            }, 0)
        });
    })

    return <FaqQuestionBlock className='faq-block' onClick={onClick}>
        <FaqQuestionTopDiv>
            <FaqQuestionTitle>{title}</FaqQuestionTitle>
            <FaqQuestionPlusBtn>+</FaqQuestionPlusBtn>
        </FaqQuestionTopDiv>
        {isOpen && <FaqQuestionAnswer className='faq-answer'>{children}</FaqQuestionAnswer> || ""}
    </FaqQuestionBlock>
}

export default FaqQuestion;