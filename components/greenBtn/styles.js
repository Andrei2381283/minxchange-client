import Link from "next/link";
import styled from "styled-components";

export const GreenBtnLink = styled(Link)`
    background: #38E7BA;
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
`
