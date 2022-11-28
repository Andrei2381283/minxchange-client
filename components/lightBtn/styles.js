import Link from "next/link";
import styled from "styled-components";

export const LightBtnLink = styled(Link)`
    border-radius: 3px;
    user-select: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75em 1em;
    color: inherit;
    text-decoration: none;
    border: 1px solid ${props => props.color};
    cursor: pointer;
`
