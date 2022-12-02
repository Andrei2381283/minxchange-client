import React from 'react';
import cookie from "cookie";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Page from '../components/page/page';
import { GPartnersSectionBlock, PartnersBtnW, PartnersDiv, PartnersTitle, TitleTextH1, TradeSection } from '../styles';
import WithdrawBlock from '../components/withdrawBlock/withdrawBlock';

import partnersArrowW from "../assets/partnersArrowW.svg";
import bestchangeW from "../assets/bestchangeW.svg";
import binanceW from "../assets/binanceW.svg";
import blockchainW from "../assets/blockchainW.svg";


export async function getServerSideProps({ req, locale }) {
    return {
        props: {
            _theme: cookie.parse(req.headers.cookie || "").theme || "Light",
            ...(await serverSideTranslations(locale, ['common', 'header'])),
            // Will be passed to the page component as props
        },
    };
}

export default function Funds(props) {
    return (
        <Page {...props}>
            <TradeSection>
                <TitleTextH1 style={{fontSize:"2rem"}}>Обменник криптовалют</TitleTextH1>
                <WithdrawBlock />
            </TradeSection>
            <GPartnersSectionBlock>
                <PartnersTitle style={{color: "white"}}>Партнеры</PartnersTitle>
                <PartnersDiv>
                    <PartnersBtnW>
                        <Image src={partnersArrowW} />
                    </PartnersBtnW>
                    <Image style={{ width: "17.75rem", height: "auto" }} src={bestchangeW} />
                    <Image style={{ width: "17.75rem", height: "auto" }} src={binanceW} />
                    <Image style={{ width: "18.75rem", height: "auto" }} src={blockchainW} />
                    <PartnersBtnW>
                        <Image src={partnersArrowW} />
                    </PartnersBtnW>
                </PartnersDiv>
            </GPartnersSectionBlock>
        </Page>
    )
}
