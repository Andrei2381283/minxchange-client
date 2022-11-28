import Link from "next/link";
import styled from "styled-components";

export const ChangeLngContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 3em;
    width: 32px;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
    position: relative;
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
`

export const ChangeLngElem = styled(Link)`
    color: inherit;
    text-decoration: none;
    width: 100%;
    &:hover {
        background-color: lightblue;
    }
`