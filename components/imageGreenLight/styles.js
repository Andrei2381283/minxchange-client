import styled from "styled-components";

export const ImageGreenLightDiv = styled.div`
    padding: 1.5em;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(56, 231, 186, 0.37);
        filter: blur(22.5px);
    }
`