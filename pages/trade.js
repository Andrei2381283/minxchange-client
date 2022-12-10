import React from 'react';
import cookie from "cookie";
import { getContent } from '../utils/api';
import Image from 'next/image';
import Page from '../components/page/page';
import { GPartnersSectionBlock, PartnersBtnW, PartnersDiv, PartnersTitle, TitleTextH1, TradeSection } from '../styles';
import WithdrawBlock from '../components/withdrawBlock/withdrawBlock';

import partnersArrowW from "../assets/partnersArrowW.svg";
import bestchangeW from "../assets/bestchangeW.svg";
import binanceW from "../assets/binanceW.svg";
import blockchainW from "../assets/blockchainW.svg";
import { useTranslation } from '../utils/translate';


export async function getServerSideProps({ req }) {
    const locales = await getContent(cookie.parse(req.headers.cookie || "").lang || "ru");
    
    const ns = {};

    locales.forEach(element => {
        if(!element.headerContent || !element.language) return;
        if(!ns[element.headerContent]) ns[element.headerContent] = {};
        ns[element.headerContent][element.idContent] = element.textContent;
    });

    return {
        props: {
            _theme: cookie.parse(req.headers.cookie || "").theme || "Light",
            lang:  cookie.parse(req.headers.cookie || "").lang || "ru",
            ns
        }
    };
}

export default function Funds(props) {

    const { t } = useTranslation("index");

    return (
        <Page {...props}>
            <TradeSection>
                <TitleTextH1 style={{fontSize:"2rem"}}>{t("tradeTitle")}</TitleTextH1>
                <WithdrawBlock />
            </TradeSection>
            <GPartnersSectionBlock>
                <PartnersTitle style={{color: "white"}}>{t("partners")}</PartnersTitle>
                <PartnersDiv>
                    <PartnersBtnW>
                        <Image alt="" src={partnersArrowW} />
                    </PartnersBtnW>
                    <Image style={{ width: "17.75rem", height: "auto" }} alt="" src={bestchangeW} />
                    <Image style={{ width: "17.75rem", height: "auto" }} alt="" src={binanceW} />
                    <Image style={{ width: "18.75rem", height: "auto" }} alt="" src={blockchainW} />
                    <PartnersBtnW>
                        <Image alt="" src={partnersArrowW} />
                    </PartnersBtnW>
                </PartnersDiv>
            </GPartnersSectionBlock>
        </Page>
    )
}
