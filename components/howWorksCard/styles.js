import styled from "styled-components";

export const HowWorksCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5em 2em 3em;
    align-items: center;
    background: ${props => props.color};
    box-shadow: 18px 15px 21px rgba(149, 168, 182, 0.04);
    border-radius: 3px;
    max-width: 285px;
    position: relative;
`

export const HowWorksCardTitle = styled.span`
    font-weight: 500;
    font-size: 1.25rem;
    margin-top: 1rem;
    text-align: center;
`

export const HowWorksCardDescr = styled.span`
    margin-top: 1rem;
    text-align: center;
    color: ${props => props.color};
`

export const HowWorksCardNum = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #38E7BA;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #38E7BA;
    border-radius: 50%;
    width: 2.25em;
    height: 2.25em;
    color: ${props => props.color};
`