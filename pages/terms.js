import React from 'react';
import cookie from "cookie";
import { FundsSection, FundsShadow1, FundsShadow2, FundsText, FundsTitle, SectionBlock, SmallTitleText, TitleText } from '../styles';
import { getContent } from '../utils/api';
import Page from '../components/page/page';
import { ThemeContext } from '../theme/theme';
import FundsHeader from '../components/fundsHeader/fundsHeader';
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

    const { t } = useTranslation("terms");

    return (
        <Page {...props}>
            <SectionBlock>
                <SmallTitleText>{t("termsSmallTitle")}</SmallTitleText>
                <TitleText>{t("termsTitle")}</TitleText>
                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <>
                            <FundsShadow1 />
                            <FundsShadow2 />
                            <FundsSection theme={theme.name}>
                                <FundsText>{t("termsText")}</FundsText>
                            </FundsSection>
                        </>
                    )}
                </ThemeContext.Consumer>
            </SectionBlock>
        </Page>
    )
}
