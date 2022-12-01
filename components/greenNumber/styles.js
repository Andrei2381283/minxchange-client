import styled from "styled-components"


export const GreenNumberDiv = styled.div`
    background: #38E7BA;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #38E7BA;
    border-radius: 50%;
    width: 2.25em;
    height: 2.25em;
    color: ${props => props.theme == "Light" ? "#FFFFFF" : "#00004A"};
`