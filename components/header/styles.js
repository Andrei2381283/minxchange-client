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
`

export const HeaderLink = styled(Link)`
    margin-left: 1em;
    &:first-of-type {
        margin-left: 3em;
    }
    color: inherit;
    text-decoration: none;
`

export const HeaderThemeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
    user-select: none;
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