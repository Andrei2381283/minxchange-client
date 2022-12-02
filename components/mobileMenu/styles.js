import styled from "styled-components";
import { HeaderLink } from "../header/styles";

export const MobileMenuContainer = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    ${props => props.show ? "transform: translateX(0);" : ""}
    background: rgba(0,0,0,0.4);
    z-index: 100;
    display: flex;
    font-size: 16px;
`

export const MobileMenuDiv = styled.div`
    height: 100%;
    width: 200px;
    background: ${props => props.theme == "Light" ? "white" : "#050312"};
    border-radius: 0 20px 20px 0;
    transform: translateX(-100%);
    transition: 0.2s;
    ${props => props.show ? "transform: translateX(0);" : ""}
    display: flex;
    flex-direction: column;
    padding: 16px;
`

export const MobileMenuLink = styled(HeaderLink)`
    margin: 0 auto 10px;

    &:first-of-type {
        margin-left: auto;
        margin-top: 16px;
    }
`