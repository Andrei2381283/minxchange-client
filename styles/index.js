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

export const CryptoAnimatedImg = styled(Image)`
    @keyframes vertAnim {
        from {
            transform: translateY(-5%);
        }

        to {
            transform: translateY(5%)
        }
    }

    animation: 5s infinite alternate ease-in-out vertAnim;
`

export const LitecoinImg = styled(CryptoAnimatedImg)`
    position: absolute;
    left: 25.375em;
    top: -0.6625em;
    height: auto;
    width: 3em;
    
    @keyframes vertAnimLitecoin {
        from {
            transform: translateY(-16%);
        }

        to {
            transform: translateY(16%)
        }
    }
    animation-name: vertAnimLitecoin;
`

export const PayeerImg = styled(CryptoAnimatedImg)`
    position: absolute;
    left: 8.56625em;
    top: 1.236875em;
    height: auto;
    width: 6.5625em;
    
    @keyframes vertAnimPayeer {
        from {
            transform: translateY(-12%);
        }

        to {
            transform: translateY(12%)
        }
    }
    animation-name: vertAnimPayeer;
`

export const TetherImg = styled(CryptoAnimatedImg)`
    position: absolute;
    left: -3.0625em;
    top: 13.8125em;
    height: auto;
    width: 10.5625em;
    
    @keyframes vertAnimTether {
        from {
            transform: translateY(-8%);
        }

        to {
            transform: translateY(8%)
        }
    }
    animation-name: vertAnimTether;
`

export const DollarImg = styled(CryptoAnimatedImg)`
    position: absolute;
    right: 0;
    top: 7.75em;
    height: auto;
    width: 11.125em;
    
    @keyframes vertAnimDollar {
        from {
            transform: translateY(-5%);
        }

        to {
            transform: translateY(5%)
        }
    }
    animation-name: vertAnimDollar;
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
    transition: 0.5s;
    
    @keyframes opacityAnim_ {
        from {
            opacity: 0;
        }
    
        to {
            opacity: 1;
        }
    }
    
    animation: 5.5s opacityAnim_;
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

export const GreenText = styled.span`
    color: #27BE98;
`

export const FaqBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FaqBlockImg = styled.div`
    position: relative;
`

export const FaqImg1 = styled(Image)`
    position: absolute;
    top: 11.75rem;
    left: 0.25rem;
    height: auto;
    width: 5.75rem;
    ${props => props.theme == "Light" ? `
        background: #FFFFFF;
        box-shadow: 10.4968px 20.9936px 23.3262px rgba(85, 117, 109, 0.09);
    ` : `
        background: rgba(255, 255, 255, 0.06);
        box-shadow: 11.3291px 22.6583px 25.1759px rgba(85, 117, 109, 0.09);
        backdrop-filter: blur(15px);
    `}
    border-radius: 6.29397px;
`

export const FaqImg2 = styled(Image)`
    position: absolute;
    top: 14.4375rem;
    left: 19.625rem;
    height: auto;
    width: 12.5625rem;
    ${props => props.theme == "Light" ? `
        background: linear-gradient(311.46deg, rgba(255, 255, 255, 0.28) 2.47%, rgba(255, 255, 255, 0) 118.77%);
        filter: drop-shadow(-3.70613px 3.70613px 12.9714px rgba(85, 117, 109, 0.18));
        backdrop-filter: blur(13.898px);
    ` : `
        background: linear-gradient(311.46deg, rgba(236, 236, 241, 0.12) 2.47%, rgba(0, 0, 0, 0.1) 118.77%);
        backdrop-filter: blur(15px);
    `}
`

export const FaqGreenShadow = styled.div`
    background: #38E7BA;
    opacity: 0.46;
    filter: blur(134.347px);
    position: absolute;
    top: 14.25rem;
    left: -3.25rem;
    width: 29.0625rem;
    height: 9.125rem;
`

export const FaqQuestionsBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7.5rem;
`

export const ReferalLeft = styled.div`
    display: flex;
    flex-direction: column  ;
`

export const ReferalRight = styled.div`
    display: flex;
    position: relative;
`

export const ReferalGreenShadow = styled.div`
    background: #38E7BA;
    opacity: 0.46;
    filter: blur(134.347px);
    position: absolute;
    top: 11.375rem;
    left: 5.375rem;
    width: 28.5rem;
    height: 14rem;
    z-index: -1;
`

export const PartnersTitle = styled.h2`
    font-size: 2rem;
    color: #95A8B6;
    font-weight: 400;
`

export const PartnersDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const PartnersBtn = styled.button`
    width: 2.875rem;
    height: 2.875rem;
    border: 1px solid #95A8B6;
    background: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-of-type {
        margin-right: 1.25rem;
    }

    &:last-of-type {
        margin-left: 1.25rem;
        rotate: 180deg;
    }
`

export const FundsSection = styled(SectionBlock)`
    background-color: ${props => props.theme == "Light" ? "white" : "#0C0D1B"};
    padding: 4rem 12.5rem 4.5rem;
    box-shadow: 18px 15px 21px rgba(149, 168, 182, 0.04);
    border-radius: 5px;
    transition: 0.5s;
    align-items: flex-start;
`

export const FundsTitle = styled.h3`
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
    display: flex;

    &::before {
        content: "";
        background: #3AD5AD;
        border-radius: 3px;
        min-width: 3px;
        width: 3px;
        margin: 0.4rem 1rem 0.4rem 0;
    }
`

export const FundsText = styled.p`
    margin: 1.5rem 0 0 0;
`

export const FundsShadow1 = styled.div`
    position: absolute;
    left: -11.75rem;
    top: 32.5rem;
    width: 31.875rem;
    height: 28.125rem;
    background: #38E7BA;
    opacity: 0.2;
    filter: blur(145px);
    z-index: -1;
    animation: none;
`

export const FundsShadow2 = styled.div`
    position: absolute;
    right: -5rem;
    top: 18.75rem;
    width: 31.875rem;
    height: 28.125rem;
    background: #38E7BA;
    opacity: 0.2;
    filter: blur(145px);
    z-index: -1;
    animation: none;
`