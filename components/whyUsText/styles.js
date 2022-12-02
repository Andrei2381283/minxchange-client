import styled from "styled-components";

export const WhyUsTextDiv = styled.div`
    display: flex;
    align-items: center;
    position: absolute;

    @media (max-width: 998px) {
        position: relative;
        top: 0 !important;
        left: 0 !important;
        margin: 20px auto 0 16px;
    }
`

export const WhyUsTextSpan = styled.span`
    font-weight: 500;
    font-size: 1.25rem;
    margin-left: 1rem;
`