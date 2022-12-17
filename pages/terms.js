import React from 'react';
import cookie from "cookie";
import parseHTML from "html-react-parser";
import { FundsSection, FundsShadow1, FundsShadow2, FundsText, FundsTitle, SectionBlock, SmallTitleText, TermsImage, TermsSection, TitleText } from '../styles';
import { getContent } from '../utils/api';
import Page from '../components/page/page';
import { ThemeContext } from '../theme/theme';
import FundsHeader from '../components/fundsHeader/fundsHeader';
import { useTranslation } from '../utils/translate';
import Image from 'next/image';

import term0 from "../assets/terms/000.jpg";
import term1 from "../assets/terms/001.jpg";
import term2 from "../assets/terms/002.jpg";
import term3 from "../assets/terms/003.jpg";
import term4 from "../assets/terms/004.jpg";
import term5 from "../assets/terms/005.jpg";
import term6 from "../assets/terms/006.jpg";
import term7 from "../assets/terms/007.jpg";
import term8 from "../assets/terms/008.jpg";
import term9 from "../assets/terms/009.jpg";
import term10 from "../assets/terms/010.jpg";
import term11 from "../assets/terms/011.jpg";
import term12 from "../assets/terms/012.jpg";
import term13 from "../assets/terms/013.jpg";
import term14 from "../assets/terms/014.jpg";
import term15 from "../assets/terms/015.jpg";


export async function getServerSideProps({ req }) {
    const locales = await getContent(cookie.parse(req.headers.cookie || "").lang || "en");
    
    const ns = {};

    locales.forEach(element => {
        if(!element.headerContent || !element.language) return;
        if(!ns[element.headerContent]) ns[element.headerContent] = {};
        ns[element.headerContent][element.idContent] = element.textContent;
    });

    return {
        props: {
            _theme: cookie.parse(req.headers.cookie || "").theme || "Light",
            lang:  cookie.parse(req.headers.cookie || "").lang || "en",
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
                            <TermsSection theme={theme.name}>
                                {/* <FundsText>{parseHTML(t("termsText").replace(/\n/g, "<br>"))}</FundsText> */}
                                <TermsImage src={term0} alt="" />
                                <TermsImage src={term1} alt="" />
                                <TermsImage src={term2} alt="" />
                                <TermsImage src={term3} alt="" />
                                <TermsImage src={term4} alt="" />
                                <TermsImage src={term5} alt="" />
                                <TermsImage src={term6} alt="" />
                                <TermsImage src={term7} alt="" />
                                <TermsImage src={term8} alt="" />
                                <TermsImage src={term9} alt="" />
                                <TermsImage src={term10} alt="" />
                                <TermsImage src={term11} alt="" />
                                <TermsImage src={term12} alt="" />
                                <TermsImage src={term13} alt="" />
                                <TermsImage src={term14} alt="" />
                                <TermsImage src={term15} alt="" />
                            </TermsSection>
                        </>
                    )}
                </ThemeContext.Consumer>
            </SectionBlock>
        </Page>
    )
}
