import Link from 'next/link';
import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin: 1em 7em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* @media (max-width: 1300px) {
        font-size: 1.23vw;
    } */
    @media (max-width: 998px) {
        margin: 12px 16px 0;
    }
`

export const HeaderLink = styled(Link)`
    margin-left: 1em;
    &:first-of-type {
        margin-left: 3em;
    }
    color: inherit;
    text-decoration: none;

    ${props => props.$mobileElement ? "display: none" : ""}
    ${props => props.$pcElement ? `
        @media (max-width: 998px) {
            display: none;
        }
    ` : ""}
`

export const HeaderThemeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
    user-select: none;

    ${props => props.$mobileElement ? "display: none" : ""}
    ${props => props.$pcElement ? `
        @media (max-width: 998px) {
            display: none;
        }
    ` : ""}

    @media (max-width: 998px) {
        font-size: 18px;
    }
`

export const HeaderThemePoint = styled.div`
    margin-left: 0.25em;
    border: 1px solid rgba(${props => props.color}, 0.4);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        width: 6px;
        height: 6px;
        background: #27BE98;
        border-radius: 50%;
    }
`

export const HeaderMobileMenu = styled.div`
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;

    width: 30px;
    height: 30px;

    border: 1px solid lightgray;

    border-radius: 3px;

    @media (min-width: 998px) {
        display: none;
    }
`

export const HeaderMobileMenuLine = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 1px;
    background: #38E7BA;
`