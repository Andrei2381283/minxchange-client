import React from 'react';
import { ThemeContext, themes } from '../theme/theme';
/* import Footer from '../components/footer/footer';
import Header from '../components/header/header'; */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import cookie from "cookie";
import { useTranslation } from 'next-i18next';
import parseHTML from "html-react-parser";

import Page from '../components/page/page';
import { AboutDescrText, AboutInfosBlock, AboutInfosDescr, AboutInfosLine, AboutInfosTitle, AboutSectionBlock, CardsImage, ComingSoonDiv, ComingSoonText, Currency1, Currency2, DollarImg, FaqBlock, FaqBlock2Div, FaqBlock2Img, FaqBlock2Text, FaqBlock2Title, FaqBlockImg, FaqGreenShadow, FaqImg1, FaqImg2, FaqQuestionsBlock, GreenLine, GreenMarkDiv, GreenMarksDiv, GreenMarkSubText, GreenShadow1, GreenShadow2, GreenText, HowWorksDiv, IllustrationBlock, IllustrationBlockLeft, IllustrationBlockRight, LitecoinImg, PartnersBtn, PartnersDiv, PartnersSection, PartnersTitle, PayeerImg, ReferalGreenShadow, ReferalLeft, ReferalRight, SectionBlock, SmallTitleText, TetherImg, TitleText, TitleTextH1, WhiteShadow } from '../styles';
import Image from 'next/image';
import GreenBtn from '../components/greenBtn/greenBtn';
import WhyUsText from '../components/whyUsText/whyUsText';
import HowWorksCard from '../components/howWorksCard/howWorksCard';
import WithdrawBlock from '../components/withdrawBlock/withdrawBlock';
import PlanCard from '../components/planCard/planCard';
import FaqQuestion from '../components/faqQuestion/faqQuestion';

import greenMark from "../assets/greenMark.svg";
import payeerLeft from "../assets/payeer-left.svg";
import litecoinLleft from "../assets/litecoin-lleft.svg";
import dollar from "../assets/dollar.svg";
/* import Illustration from "../assets/Illustration2.svg"; */
import tether from "../assets/tether.svg";
import smartphone from "../assets/smartphone.svg";
import currency1 from "../assets/Сurrency1.svg";
import currency2 from "../assets/Сurrency2.svg";
import currency1D from "../assets/Сurrency1D.svg";
import currency2D from "../assets/Сurrency2D.svg";
import cards from "../assets/cards.svg";
import howWorks1 from "../assets/howWorks1.svg";
import howWorks2 from "../assets/howWorks2.svg";
import howWorks3 from "../assets/howWorks3.svg";
import howWorks4 from "../assets/howWorks4.svg";
import plan1 from "../assets/plan1.svg";
import plan2 from "../assets/plan2.svg";
import plan3 from "../assets/plan3.svg";
import plan4 from "../assets/plan4.svg";
import time from "../assets/time.svg";
import faqImg from "../assets/faqImg.svg";
import faqImgD from "../assets/faqImgD.svg";
import faqImg1 from "../assets/faqImg1.svg";
import faqImg1D from "../assets/faqImg1D.svg";
import faqImg2 from "../assets/faqImg2.svg";
import faqImg2D from "../assets/faqImg2D.svg";
import referalImg from "../assets/referalImg.svg";
import partnersArrow from "../assets/partnersArrow.svg";
import bestchange from "../assets/bestchange.svg";
import binance from "../assets/binance.svg";
import blockchain from "../assets/blockchain.svg";
import replaceStrToJsx from '../utils/replaceStrToJsx';



export async function getServerSideProps({ req, locale }) {
    return {
        props: {
            _theme: cookie.parse(req.headers.cookie || "").theme || "Light",
            ...(await serverSideTranslations(locale)),
            // Will be passed to the page component as props
        },
    };
}

export default function Home(props) {

    const { t, i18n } = useTranslation("index");

    return (
        <Page {...props}>
            <IllustrationBlock>
                <IllustrationBlockLeft>
                    <SmallTitleText>{t("illustartionSmallTitle")}</SmallTitleText>
                    <TitleTextH1>{t("illustartionTitle")}</TitleTextH1>
                    <GreenMarksDiv>
                        <GreenMarkDiv>
                            <Image src={greenMark} alt="" />
                            <GreenMarkSubText>{t("illustrationMark1")}</GreenMarkSubText>
                        </GreenMarkDiv>
                        <GreenLine />
                        <GreenMarkDiv>
                            <Image src={greenMark} alt="" />
                            <GreenMarkSubText>{t("illustrationMark2")}</GreenMarkSubText>
                        </GreenMarkDiv>
                        <GreenLine />
                        <GreenMarkDiv>
                            <Image src={greenMark} alt="" />
                            <GreenMarkSubText>{t("illustrationMark3")}</GreenMarkSubText>
                        </GreenMarkDiv>
                    </GreenMarksDiv>
                    <GreenBtn style={{ marginTop: "7em" }}>{t("start", {ns: "common"})}</GreenBtn>
                </IllustrationBlockLeft>
                <IllustrationBlockRight>
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <>
                                <GreenShadow1 />
                                <GreenShadow2 />
                                <Image style={{ position: "absolute", left: "6.9375em", top: "2.15em", height: "auto", width: "29.75em" }} alt="" src={smartphone} />
                                        <WhiteShadow color={theme == themes.light ? "linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, #FAFAFA 62.16%)" : "linear-gradient(180deg, rgba(4, 3, 16, 0) 0%, #040310 62.16%)"} />
                                <PayeerImg alt="" src={payeerLeft} />
                                <LitecoinImg alt="" src={litecoinLleft} />
                                <DollarImg alt=""  src={dollar} />
                                <TetherImg alt="" src={tether} />
                                <Currency1 theme={theme.name} alt="" src={theme == themes.light ? currency1 : currency1D} />
                                <Currency2 theme={theme.name} alt="" src={theme == themes.light ? currency2 : currency2D} />
                            </>
                        )}
                    </ThemeContext.Consumer>
                </IllustrationBlockRight>
            </IllustrationBlock>
            <AboutSectionBlock id='aboutBlock'>
                <SmallTitleText style={{ fontSize: "4em" }}>“</SmallTitleText>
                <AboutDescrText>{parseHTML(t("aboutTitle"))}</AboutDescrText>
                <AboutInfosBlock>
                    <div>
                        <AboutInfosTitle>{t("aboutItem1Title")}</AboutInfosTitle>
                        <AboutInfosDescr>{t("aboutItem1")}</AboutInfosDescr>
                    </div>
                    <AboutInfosLine />
                    <div>
                        <AboutInfosTitle>{t("aboutItem2Title")}</AboutInfosTitle>
                        <AboutInfosDescr>{t("aboutItem2")}</AboutInfosDescr>
                    </div>
                    <AboutInfosLine />
                    <div>
                        <AboutInfosTitle>{t("aboutItem3Title")}</AboutInfosTitle>
                        <AboutInfosDescr>{t("aboutItem3")}</AboutInfosDescr>
                    </div>
                    <AboutInfosLine />
                    <div>
                        <AboutInfosTitle>{t("aboutItem4Title")}</AboutInfosTitle>
                        <AboutInfosDescr>{t("aboutItem4")}</AboutInfosDescr>
                    </div>
                </AboutInfosBlock>
            </AboutSectionBlock>
            <SectionBlock id='whyUsBlock'>
                <SmallTitleText>{t("whyUsSmallTitle")}</SmallTitleText>
                <TitleText>{t("whyUsTitle")}</TitleText>
                <WhyUsText style={{ top: "11.875em", left: "6.32%" }}>{t("whyUs1")}</WhyUsText>
                <WhyUsText style={{ top: "16.875em", left: "2.53%" }}>{t("whyUs2")}</WhyUsText>
                <WhyUsText style={{ top: "21.875em", left: "0" }}>{t("whyUs3")}</WhyUsText>
                <WhyUsText style={{ top: "26.875em", left: "2.53%" }}>{t("whyUs4")}</WhyUsText>
                <WhyUsText style={{ top: "31.875em", left: "6.32%" }}>{t("whyUs5")}</WhyUsText>
                <WhyUsText style={{ top: "11.875em", left: "72.344%" }}>{t("whyUs6")}</WhyUsText>
                <WhyUsText style={{ top: "16.875em", left: "74.873%" }}>{t("whyUs7")}</WhyUsText>
                <WhyUsText style={{ top: "21.875em", left: "78.667%" }}>{t("whyUs8")}</WhyUsText>
                <WhyUsText style={{ top: "26.875em", left: "74.873%" }}>{t("whyUs9")}</WhyUsText>
                <WhyUsText style={{ top: "31.875em", left: "72.344%" }}>{t("whyUs10")}</WhyUsText>
                <CardsImage src={cards} alt="Cards" />
                <GreenBtn>{t("start", {ns: "common"})}</GreenBtn>
            </SectionBlock>
            <SectionBlock id='howItWorksBlock'>
                <SmallTitleText>{t("howItWorksSmallTitle")}</SmallTitleText>
                <TitleText>{t("howItWorksTitle")}</TitleText>
                <HowWorksDiv>
                    <HowWorksCard number="1" image={howWorks1} title={t("howItWorks1Title")}>{t("howItWorks1")}</HowWorksCard>
                    <HowWorksCard number="2" image={howWorks2} title={t("howItWorks2Title")}>{t("howItWorks2")}</HowWorksCard>
                    <HowWorksCard number="3" image={howWorks3} title={t("howItWorks3Title")}>{t("howItWorks3")}</HowWorksCard>
                    <HowWorksCard number="4" image={howWorks4} title={t("howItWorks4Title")}>{t("howItWorks4")}</HowWorksCard>
                </HowWorksDiv>
            </SectionBlock>
            <SectionBlock>
                <SmallTitleText>{t("tradeSmallTitle")}</SmallTitleText>
                <TitleText>{t("tradeTitle")}</TitleText>
                <WithdrawBlock />
                <GreenBtn href="/trade" style={{marginTop: "4rem"}}>{t("start", {ns: "common"})}</GreenBtn>
            </SectionBlock>
            <SectionBlock>
                <SmallTitleText>{t("soonSmallTitle")}</SmallTitleText>
                <TitleText>{t("soonTitle")}</TitleText>
                <HowWorksDiv>
                    <PlanCard image={plan1}>{parseHTML(t("soon1").replace(/\/GreenText/g, "/div").replace(/GreenText/g, "div style='color: #27BE98;'"))}</PlanCard>
                    <PlanCard image={plan2}>{parseHTML(t("soon2").replace(/\/GreenText/g, "/div").replace(/GreenText/g, "div style='color: #27BE98;'"))}</PlanCard>
                    <PlanCard image={plan3}>{parseHTML(t("soon3").replace(/\/GreenText/g, "/div").replace(/GreenText/g, "div style='color: #27BE98;'"))}</PlanCard>
                    <ComingSoonDiv>
                        <Image alt="" src={time} />
                        <ComingSoonText>{t("comingSoon")}</ComingSoonText>
                    </ComingSoonDiv>
                    <PlanCard image={plan4}>{parseHTML(t("soon4").replace(/\/GreenText/g, "/div").replace(/GreenText/g, "div style='color: #27BE98;'"))}</PlanCard>
                </HowWorksDiv>
            </SectionBlock>
            <SectionBlock>
                <SmallTitleText>{t("faqSmallTitle")}</SmallTitleText>
                <TitleText>{t("faqTitle")}</TitleText>
                <FaqBlock>
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <FaqBlockImg>
                                <FaqGreenShadow />
                                <Image style={{ width: "32.75rem", height: "auto" }} alt="" src={theme == themes.light ? faqImg : faqImgD} />
                                <FaqImg1 theme={theme.name} alt="" src={theme == themes.light ? faqImg1 : faqImg1D} />
                                <FaqBlock2Div theme={theme.name}>
                                    <FaqBlock2Img theme={theme.name} src={greenMark} alt="" />
                                    <FaqBlock2Title>+ 540$</FaqBlock2Title>
                                    <FaqBlock2Text>{t("faqImgText")}</FaqBlock2Text>
                                </FaqBlock2Div>
                            </FaqBlockImg>
                        )}
                    </ThemeContext.Consumer>
                    <FaqQuestionsBlock>
                        <FaqQuestion title={t("faq1Title")}>{t("faq1Text")}</FaqQuestion>
                        <FaqQuestion title={t("faq2Title")}>{t("faq2Text")}</FaqQuestion>
                        <FaqQuestion title={t("faq3Title")}>{t("faq3Text")}</FaqQuestion>
                        <FaqQuestion title={t("faq4Title")}>{t("faq4Text")}</FaqQuestion>
                    </FaqQuestionsBlock>
                </FaqBlock>
            </SectionBlock>
            <SectionBlock style={{flexDirection: "row", justifyContent: "space-between"}}>
                <ReferalLeft>
                    <SmallTitleText>{t("referalSmallTitle")}</SmallTitleText>
                    <TitleText style={{marginTop: "1rem", marginBottom: "2rem", textAlign: "left"}}>{t("referalTitle")}</TitleText>
                    <span>{t("referalText")}</span>
                    <GreenBtn style={{marginTop: "3.5rem"}}>{t("invite", {ns: "common"})}</GreenBtn>
                </ReferalLeft>
                <ReferalRight>
                    <ReferalGreenShadow />
                    <Image style={{ width: "41.6875rem", height: "auto" }} alt="" src={referalImg} />
                </ReferalRight>
            </SectionBlock>
            <PartnersSection>
                <PartnersTitle>{t("partners")}</PartnersTitle>
                <PartnersDiv>
                    <PartnersBtn>
                        <Image alt="" src={partnersArrow} />
                    </PartnersBtn>
                    <Image style={{ width: "17.75rem", height: "auto" }} alt="" src={bestchange} />
                    <Image style={{ width: "17.75rem", height: "auto" }} alt="" src={binance} />
                    <Image style={{ width: "18.75rem", height: "auto" }} alt="" src={blockchain} />
                    <PartnersBtn>
                        <Image alt="" src={partnersArrow} />
                    </PartnersBtn>
                </PartnersDiv>
            </PartnersSection>
        </Page>
    )
}
