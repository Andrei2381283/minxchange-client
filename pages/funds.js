import React from 'react';
import cookie from "cookie";
import { FundsSection, FundsShadow1, FundsShadow2, FundsText, FundsTitle, SectionBlock, SmallTitleText, TitleText } from '../styles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/page/page';
import { ThemeContext } from '../theme/theme';
import FundsHeader from '../components/fundsHeader/fundsHeader';
import { useTranslation } from 'next-i18next';


export async function getServerSideProps({ req, locale }) {
    return {
        props: {
            _theme: cookie.parse(req.headers.cookie || "").theme || "Light",
            ...(await serverSideTranslations(locale)),
            // Will be passed to the page component as props
        },
    };
}

export default function Funds(props) {

    const { t, i18n } = useTranslation("funds");

    return (
        <Page {...props}>
            <SectionBlock>
                <SmallTitleText>{t("fundsSmallTitle")}</SmallTitleText>
                <TitleText>{t("fundsTitle")}</TitleText>
                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <>
                            <FundsShadow1 />
                            <FundsShadow2 />
                            <FundsSection theme={theme.name}>
                                <FundsTitle>{t("fundsTitle2")}</FundsTitle>
                                <FundsHeader number={1}>{t("fundsSectionHeader1")}</FundsHeader>
                                <FundsText>{t("fundsText1")}</FundsText>
                                <FundsText>{t("fundsText2")}</FundsText>
                                <FundsHeader number={2}>{t("fundsSectionHeader2")}</FundsHeader>
                                <FundsText>{t("fundsText3")}</FundsText>
                                <FundsText>{t("fundsText4")}</FundsText>
                            </FundsSection>
                        </>
                    )}
                </ThemeContext.Consumer>
            </SectionBlock>
        </Page>
    )
}
