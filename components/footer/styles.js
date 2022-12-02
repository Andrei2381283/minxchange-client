import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 4rem 7rem;
    ${props => props.theme == "Light" ? 
    `background: linear-gradient(90.75deg, #0A1A1B 6.88%, #010102 50.65%);` :
    `border-top: 1px solid rgba(255, 255, 255, 0.15);`
    }
    color: white;
    display: flex;
    margin-top: 13.75rem;

    @media (max-width: 998px) {
        flex-direction: column;
        padding: 16px;
    }
`

export const FooterLinksDiv = styled.nav`
    display: flex;
    flex-direction: column;
    margin-left: 4.5rem;

    //color: #ECECF1;/* ${props => props.theme == "Light" ? "#ECECF1" : "#ECECF1"}; */

    &:first-of-type {
        margin-left: auto;
    }

    @media (max-width: 998px) {
        margin-left: 3rem !important;
        margin-top: 20px;
        font-size: 18px;
    }
`

export const FooterLink = styled(Link)`
    margin-top: 0.5rem;
    color: #ECECF1;
    text-decoration: none;
    &:first-of-type {
        margin-top: 0;
    }
`