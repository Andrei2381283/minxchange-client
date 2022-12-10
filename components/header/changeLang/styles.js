import Link from "next/link";
import styled from "styled-components";

export const ChangeLngContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 3rem;
    width: 32px;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
    position: relative;

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

export const ChangeLngList = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 5px;
    text-transform: uppercase;
    min-width: 100%;
    text-align: center;
    z-index: 10;
    background: ${props => props.theme.bg};
`

export const ChangeLngElem = styled.div`
    color: inherit;
    text-decoration: none;
    width: 100%;
    &:hover {
        background-color: lightblue;
    }
`