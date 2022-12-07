import React from 'react';
import cookie from "cookie";
import nextI18nextConfig from '../next-i18next.config';
import { getContent } from '../utils/api';
import Image from 'next/image';
import Page from '../components/page/page';
import { GPartnersSectionBlock, PartnersBtnW, PartnersDiv, PartnersTitle, TitleTextH1, TradeSection } from '../styles';
import WithdrawBlock from '../components/withdrawBlock/withdrawBlock';

import partnersArrowW from "../assets/partnersArrowW.svg";
import bestchangeW from "../assets/bestchangeW.svg";
import binanceW from "../assets/binanceW.svg";
import blockchainW from "../assets/blockchainW.svg";
import { useTranslation } from 'next-i18next';


export async function getServerSideProps({ req, locale }) {

    const locales = await getContent(locale);

    const ns = {};

    locales.forEach(element => {
        if(!element.headerContent || !element.language) return;
        if(!ns[element.headerContent]) ns[element.headerContent] = {};
        ns[element.headerContent][element.idContent] = element.textContent;
    });

    const _nextI18Next = {
        initialI18nStore: {
            [locale]: ns
        },
        initialLocale: locale,
        ns: Object.keys(ns),
        userConfig: {
            default: {
                i18n: nextI18nextConfig.i18n
            },
            i18n: nextI18nextConfig.i18n
        }
    }
    return {
        props: {
            _theme: cookie.parse(req.headers.cookie || "").theme || "Light",
            _nextI18Next,
        },
    };
}

export default function Funds(props) {

    const { t, i18n } = useTranslation("index");

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
