import styled from "styled-components";
import Image from 'next/image';

export const TitleTextH1 = styled.h1`
    font-weight: 600;
    font-size: 4em;
    margin: 1.5rem 0 4rem;
`

export const TitleText = styled.h2`
    font-weight: 600;
    font-size: 4em;
    margin: 0.5rem 0 4.5rem;
`

export const SmallTitleText = styled.span`
    font-weight: 600;
    color: #27BE98;
    text-transform: uppercase;
`

export const IllustrationBlock  = styled.section`
    margin: 3rem 7em 0;
    display: flex;
`

export const IllustrationBlockLeft  = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    margin-right: 4rem;
    margin-left: auto;
`

export const IllustrationBlockRight  = styled.div`
    min-width: 43.67625em;
    min-height: 33.3125em;
    position: relative;
    margin-right: auto;
    /* font-size: 0.95em; */
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
    width: 13.75em;
    height: auto;
    left: 22.875em;
    top: 15.1875em;
    background: linear-gradient(275.17deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 98.52%);
    filter: drop-shadow(-4px 5px 14px rgba(85, 117, 109, 0.18));
    backdrop-filter: blur(12.5px);
`

export const Currency2 = styled(Image)`
    position: absolute;
    width: 13.75em;
    height: auto;
    left: 3.6875em;
    top: 8.8125em;
    background: linear-gradient(275.17deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 98.52%);
    filter: drop-shadow(5px 14px 14px rgba(85, 117, 109, 0.09));
    backdrop-filter: blur(12.5px);
`

export const GreenShadow1 = styled.div`
    position: absolute;
    left: 1.5em;
    top: 8.25em;
    width: 7.8125em;
    height: 6.75em;
    z-index: -1;
    background: #38E7BA;
    filter: blur(145px);
`

export const GreenShadow2 = styled.div`
    position: absolute;
    left: 20.6875em;
    top: 56px;
    width: 3.5em;
    height: 13.5625em;
    z-index: -1;
    background: #38E7BA;
    filter: blur(145px);
`

export const WhiteShadow = styled.div`
    position: absolute;
    width: 100%/* 37.5em */;
    height: 12em;
    background: ${props => props.color};
    left: 0/* 3.0625em */;
    top: 20.625em;
`

export const SectionBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 7.5em 7em 0;
    align-items: center;
    position: relative;
`

export const AboutDescrText = styled.h3`
    font-weight: 400;
    font-size: 2em;
    margin-top: 0.25em;
    text-align: center;
`

export const AboutInfosBlock = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 4em auto 0;
`

export const AboutInfosLine = styled.div`
    width: 2px;
    background: rgba(85, 117, 109, 0.07);
    border-radius: 5px;
`

export const AboutInfosTitle = styled.div`
    font-weight: 600;
    font-size: 3rem;
    color: #27BE98;
    text-align: center;
`

export const AboutInfosDescr = styled.div`
    font-weight: 500;
    margin-top: 1rem;
    font-size: 1rem;
    text-align: center;
`

export const CardsImage = styled(Image)`
    object-fit: cover;
    object-position: top;
    width: 73.3125em;
    height: auto/* 29.9375em */;
    margin-bottom: -18.9375em;
`

export const HowWorksDiv = styled.div`
    display: flex;
`