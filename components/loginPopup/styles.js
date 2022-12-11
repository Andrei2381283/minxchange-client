import styled from "styled-components";

export const LoginPopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* width: 100%;
    height: 100%; */
    z-index: 101;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0,0,0,0.4);
`

export const LoginPopupHeader = styled.h2`
    margin-top: 0;
    font-size: 1.75rem;
`

export const LoginPopupDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;

    background: ${props => props.theme.name == "Light" ? "white" : "#050312"};
    border-radius: 5px;
`

export const LoginPopupInput = styled.input`

    font-size: 1.25rem;
    font-family: inherit;

    padding: 0.25rem;

    &:not(&:first-of-type) {
        margin-top: 0.5rem;
    }
`