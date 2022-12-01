import Link from "next/link";
import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

export const LogoContainerL = styled(Link)`
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
`

export const LogoText = styled.span`
    font-weight: 600;
    font-size: 20px;
    margin-left: 0.5rem;
`