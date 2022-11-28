import styled from "styled-components";
import Image from 'next/image';

export const TitleTextH1 = styled.h1`
    font-weight: 600;
    font-size: 4em;
`

export const TitleText = styled.h2`
    font-weight: 600;
    font-size: 4em;
`

export const SmallTitleText = styled.span`
    font-weight: 600;
    color: #27BE98;
`

export const IllustrationBlock  = styled.section`
    margin: 3rem 7em 0;
    display: flex;
`

export const IllustrationBlockLeft  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 4rem;
`

export const IllustrationBlockRight  = styled.div`
    min-width: 43.67625em;
    min-height: 33.3125em;
    position: relative;
`

export const GreenMarksDiv = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`

export const GreenMarkDiv = styled.div`
    position: relative;
    height: 20px;
    width: 20px;
`

export const GreenMarkSubText = styled.span`
    position: absolute;
    left: 0;
    top: 150%;
`

export const GreenLine = styled.div`
    height: 1px;
    width: 100%;
    background: rgba(56, 231, 186, 0.4);
`

export const Currency1 = styled(Image)`
    position: absolute;
    left: 366px;
    top: 243px;
    background: linear-gradient(275.17deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 98.52%);
    filter: drop-shadow(-4px 5px 14px rgba(85, 117, 109, 0.18));
    backdrop-filter: blur(12.5px);
`

export const Currency2 = styled(Image)`
    position: absolute;
    left: 59px;
    top: 141px;
    background: linear-gradient(275.17deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 98.52%);
    filter: drop-shadow(5px 14px 14px rgba(85, 117, 109, 0.09));
    backdrop-filter: blur(12.5px);
`

export const GreenShadow1 = styled.div`
    position: absolute;
    left: 24px;
    top: 132px;
    width: 125px;
    height: 108px;
    z-index: -1;
    background: #38E7BA;
    filter: blur(145px);
`

export const GreenShadow2 = styled.div`
    position: absolute;
    left: 331px;
    top: 56px;
    width: 251px;
    height: 217px;
    z-index: -1;
    background: #38E7BA;
    filter: blur(145px);
`