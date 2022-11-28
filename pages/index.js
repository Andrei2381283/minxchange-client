import React from 'react';
import { ThemeContext, themes } from '../theme/theme';
/* import Footer from '../components/footer/footer';
import Header from '../components/header/header'; */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/page/page';
import { Currency1, Currency2, GreenLine, GreenMarkDiv, GreenMarksDiv, GreenMarkSubText, GreenShadow1, GreenShadow2, IllustrationBlock, IllustrationBlockLeft, IllustrationBlockRight, SmallTitleText, TitleText } from '../styles';
import greenMark from "../assets/greenMark.svg";
/* import payeerLeft from "../assets/payeer-left.svg";
import litecoinLleft from "../assets/litecoin-lleft.svg";
import dollar from "../assets/dollar.svg"; */
import Illustration from "../assets/Illustration2.svg";
import currency1 from "../assets/Сurrency1.svg";
import currency2 from "../assets/Сurrency2.svg";
import Image from 'next/image';
import GreenBtn from '../components/greenBtn/greenBtn';


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
          <TitleText style={{marginTop: "1.5rem"}}>Новый  подход к обмену валют</TitleText>
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
          <GreenBtn style={{marginTop: "7em"}}>Начать</GreenBtn>
        </IllustrationBlockLeft>
        <IllustrationBlockRight>
          <GreenShadow1 />
          <GreenShadow2 />
          {/* <Image style={{position: "absolute", left: "137.06px", top: "19.79px"}} src={payeerLeft} />
          <Image style={{position: "absolute", left: "406px", top: "-10.6px"}} src={litecoinLleft} />
          <Image style={{position: "absolute", right: "-111.82px", top: "124.4px"}} src={dollar} /> */}
          <Image style={{width: "100%"}} src={Illustration}/>
          <Currency1 src={currency1} />
          <Currency2 src={currency2} />
        </IllustrationBlockRight>
      </IllustrationBlock>
    </Page>
  )
}
