import styled from "styled-components";

export const FaqQuestionBlock = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-top: 1px solid #ECECF1;
    transition: 0.5s;
    padding: 2rem;
    padding-left: 0;
    overflow: hidden;
`

export const FaqQuestionTopDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FaqQuestionPlusBtn = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    color: #27BE98;
    font-weight: 500;
    font-size: 2rem;
`

export const FaqQuestionTitle = styled.span`
    font-weight: 500;
    font-size: 1.25rem;
`

export const FaqQuestionAnswer = styled.div`
    margin-top: 1rem;
    overflow: hidden;

    @keyframes qAnim {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes qAnim2 {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }

    animation: 0.2s 1 alternate ${props => props.open ? "qAnim" : "qAnim2"};
`