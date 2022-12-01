import Link from "next/link";
import styled from "styled-components";
import { themes } from "../../theme/theme";

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
    border: 1px solid ${props => props.theme == "Light" ? "#162329" : "#38E7BA"};
    cursor: pointer;

    transition: 0.2s;

    &:hover {
        background: ${props => props.theme == "Light" ? "#162329" : "#38E7BA"};;
        color: ${props => props.theme == "Light" ? themes.dark.color : themes.light.color};;
    }
`
