import styled from "styled-components";
import upload from '../../../assets/upload.svg';

export const WithdrawChangeImgLabel = styled.label`
    width: 24px;
    height: 24px;

    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5) url(${upload.src});
        background-position: center;
        background-size: 70%;
        background-repeat: no-repeat;
    }
`