import Link from "next/link";
import styled from "styled-components";

export const GreenBtnLink = styled(Link)`
    background: #38E7BA;
    border: 1px solid #38E7BA;
    border-radius: 3px;
    user-select: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.small ? "0.75em 1em" : "1em 1.5em"};
    color: #162329;
    text-decoration: none;
    cursor: pointer;
    width: fit-content;

    transition: 0.2s;

    ${props => props.$mobileElement ? "display: none" : ""}
    ${props => props.$pcElement ? `
        @media (max-width: 998px) {
            display: none;
        }
    ` : ""}

    &:hover {
        background: transparent;
        color: inherit;
    }
`

export const GreenBtnLink2 = styled.button`
    background: #38E7BA;
    border: 1px solid #38E7BA;
    border-radius: 3px;
    user-select: none;
    font: inherit;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.small ? "0.75em 1em" : "1em 1.5em"};
    color: #162329;
    text-decoration: none;
    cursor: pointer;
    width: fit-content;

    transition: 0.2s;

    ${props => props.$mobileElement ? "display: none" : ""}
    ${props => props.$pcElement ? `
        @media (max-width: 998px) {
            display: none;
        }
    ` : ""}

    &:hover {
        background: transparent;
        color: inherit;
    }
`
