import React from 'react';
import { ThemeContext, themes } from '../theme/theme';
/* import Footer from '../components/footer/footer';
import Header from '../components/header/header'; */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/page/page';
import { AboutDescrText, AboutInfosBlock, AboutInfosDescr, AboutInfosLine, AboutInfosTitle, CardsImage, Currency1, Currency2, GreenLine, GreenMarkDiv, GreenMarksDiv, GreenMarkSubText, GreenShadow1, GreenShadow2, HowWorksDiv, IllustrationBlock, IllustrationBlockLeft, IllustrationBlockRight, SectionBlock, SmallTitleText, TitleText, TitleTextH1, WhiteShadow } from '../styles';
import greenMark from "../assets/greenMark.svg";
import payeerLeft from "../assets/payeer-left.svg";
import litecoinLleft from "../assets/litecoin-lleft.svg";
import dollar from "../assets/dollar.svg";
/* import Illustration from "../assets/Illustration2.svg"; */
import tether from "../assets/tether.svg";
import smartphone from "../assets/smartphone.svg";
import currency1 from "../assets/Сurrency1.svg";
import currency2 from "../assets/Сurrency2.svg";
import cards from "../assets/cards.svg";
import howWorks1 from "../assets/howWorks1.svg";
import Image from 'next/image';
import GreenBtn from '../components/greenBtn/greenBtn';
import WhyUsText from '../components/whyUsText/whyUsText';
import HowWorksCard from '../components/howWorksCard/howWorksCard';


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'header'])),
            // Will be passed to the page component as props
        },
    };
}

export default function Home(props) {
    return (
        <Page {...props}>
            <IllustrationBlock>
                <IllustrationBlockLeft>
                    <SmallTitleText>Обмен, доступный каждому</SmallTitleText>
                    <TitleTextH1>Новый  подход к обмену валют</TitleTextH1>
                    <GreenMarksDiv>
                        <GreenMarkDiv>
                            <Image src={greenMark} alt="" />
                            <GreenMarkSubText>Меняй по выгодному курсу</GreenMarkSubText>
                        </GreenMarkDiv>
                        <GreenLine />
                        <GreenMarkDiv>
                            <Image src={greenMark} alt="" />
                            <GreenMarkSubText>Пополняй удобным доступным способом</GreenMarkSubText>
                        </GreenMarkDiv>
                        <GreenLine />
                        <GreenMarkDiv>
                            <Image src={greenMark} alt="" />
                            <GreenMarkSubText>Выводи на банковский счет</GreenMarkSubText>
                        </GreenMarkDiv>
                    </GreenMarksDiv>
                    <GreenBtn style={{ marginTop: "7em" }}>Начать</GreenBtn>
                </IllustrationBlockLeft>
                <IllustrationBlockRight>
                    <GreenShadow1 />
                    <GreenShadow2 />
                    <Image style={{ position: "absolute", left: "6.9375em", top: "2.15em", height: "auto", width: "29.75em" }} src={smartphone} />
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <WhiteShadow color={theme == themes.light ? "linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, #FAFAFA 62.16%)" : "linear-gradient(180deg, rgba(4, 3, 16, 0) 0%, #040310 62.16%)"} />
                        )}
                    </ThemeContext.Consumer>
                    <Image style={{ position: "absolute", left: "8.56625em", top: "1.236875em", height: "auto", width: "6.5625em" }} src={payeerLeft} />
                    <Image style={{ position: "absolute", left: "25.375em", top: "-0.6625em", height: "auto", width: "3em" }} src={litecoinLleft} />
                    <Image style={{ position: "absolute", right: "0", top: "7.75em", height: "auto", width: "11.125em" }} src={dollar} />
                    <Image style={{ position: "absolute", left: "-3.0625em", top: "13.8125em", height: "auto", width: "10.5625em" }} src={tether} />
                    {/* <Image style={{width: "100%"}} src={Illustration}/> */}
                    <Currency1 src={currency1} />
                    <Currency2 src={currency2} />
                </IllustrationBlockRight>
            </IllustrationBlock>
            <SectionBlock>
                <SmallTitleText style={{fontSize: "4em"}}>“</SmallTitleText>
                <AboutDescrText>Каждый день мы стараеся делать покупку и продажу криптовалюты доступным для каждого пользователя.<br />MintExchange предлагает удобное решение для обмена криптовалюты и вывода средтв на Вашу банковскую карту</AboutDescrText>
                <AboutInfosBlock>
                    <div>
                        <AboutInfosTitle>$1 млрд</AboutInfosTitle>
                        <AboutInfosDescr>сумма операций ежемесячно</AboutInfosDescr>
                    </div>
                    <AboutInfosLine />
                    <div>
                        <AboutInfosTitle>3 млн +</AboutInfosTitle>
                        <AboutInfosDescr>пользователей по всему миру</AboutInfosDescr>
                    </div>
                    <AboutInfosLine />
                    <div>
                        <AboutInfosTitle>200+</AboutInfosTitle>
                        <AboutInfosDescr>обслуживаемых юрисдикций</AboutInfosDescr>
                    </div>
                    <AboutInfosLine />
                    <div>
                        <AboutInfosTitle>50+</AboutInfosTitle>
                        <AboutInfosDescr>поддерживаемых криптовалют</AboutInfosDescr>
                    </div>
                </AboutInfosBlock>
            </SectionBlock>
            <SectionBlock>
                <SmallTitleText>Мы лучшие в своём деле</SmallTitleText>
                <TitleText>Почему мы?</TitleText>
                <WhyUsText style={{top: "11.875em", left: "6.32%"}}>Одни из лучших курсов обмена</WhyUsText>
                <WhyUsText style={{top: "16.875em", left: "2.53%"}}>Низкие комиссии</WhyUsText>
                <WhyUsText style={{top: "21.875em", left: "0"}}>Партнерская программа</WhyUsText>
                <WhyUsText style={{top: "26.875em", left: "2.53%"}}>Онлайн поддержка</WhyUsText>
                <WhyUsText style={{top: "31.875em", left: "6.32%"}}>Сервис доступен каждому</WhyUsText>
                <WhyUsText style={{top: "11.875em", left: "72.344%"}}>Обмен онлайн без рисков</WhyUsText>
                <WhyUsText style={{top: "16.875em", left: "74.873%"}}>Скорость операции</WhyUsText>
                <WhyUsText style={{top: "21.875em", left: "78.667%"}}>Конфиденциальность</WhyUsText>
                <WhyUsText style={{top: "26.875em", left: "74.873%"}}>Простота</WhyUsText>
                <WhyUsText style={{top: "31.875em", left: "72.344%"}}>Работы с банковским переводами</WhyUsText>
                <CardsImage src={cards} alt="Cards" />
                <GreenBtn>Начать</GreenBtn>
            </SectionBlock>
            <SectionBlock>
                <SmallTitleText>Последовательность</SmallTitleText>
                <TitleText>Как это работает?</TitleText>
                <HowWorksDiv>
                    <HowWorksCard number="1" image={howWorks1} title="Регистрация">Пройдите  процедуру регистрации и верификации личности.</HowWorksCard>
                    <HowWorksCard style={{marginLeft: "1em"}} number="2" image={howWorks1} title="Регистрация">Пройдите  процедуру регистрации и верификации личности.</HowWorksCard>
                    <HowWorksCard style={{marginLeft: "1em"}} number="3" image={howWorks1} title="Регистрация">Пройдите  процедуру регистрации и верификации личности.</HowWorksCard>
                    <HowWorksCard style={{marginLeft: "1em"}} number="4" image={howWorks1} title="Регистрация">Пройдите  процедуру регистрации и верификации личности.</HowWorksCard>
                </HowWorksDiv>
            </SectionBlock>
            <SectionBlock>
                <SmallTitleText>Попробуйте</SmallTitleText>
                <TitleText>Обменник криптовалют</TitleText>
            </SectionBlock>
            <SectionBlock>
                <SmallTitleText>в ближайшее время</SmallTitleText>
                <TitleText>План по развитию</TitleText>
            </SectionBlock>
            <SectionBlock>
                <SmallTitleText>Вы часто спрашиваете</SmallTitleText>
                <TitleText>FAQ</TitleText>
            </SectionBlock>
        </Page>
    )
}
