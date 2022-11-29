import Image from "next/image"
import styled from "styled-components"

export const WithdrawBlockSearchImg = styled(Image)`
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-image: url(${props => props.image});
    top: 1rem;
    left: 1rem;
`

export const WithdrawBlockSearchInput = styled.input`
    background: ${props => props.theme == "Light" ? "#F8F9FD" : "rgba(255, 255, 255, 0.05)"};
    border-radius: 3px;
    padding: 1rem;
    padding-left: 2.5rem;
    border: none;
    position: relative;
    font-size: 1rem;

    color: ${props => props.theme == "Light" ? "initial" : "white"};

    &:focus-visible {
        outline: none;
    }
`

export const WithdrawBlockSearchLabel = styled.label`
    position: relative;
    margin-top: 1rem;
`