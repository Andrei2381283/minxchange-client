import React from 'react';
import { ThemeContext, themes } from '../../theme/theme';
import { useTranslation } from '../../utils/translate';
import Logo from '../logo/logo';
import { FooterContainer, FooterLink, FooterLinksDiv } from "./styles";

const Footer = () => {

    const { t } = useTranslation("footer");

    return <ThemeContext.Consumer>
        {({ theme }) => (
            <FooterContainer theme={theme.name}>
                <Logo isLink />
                <FooterLinksDiv>
                    <FooterLink scroll={false} href="/#aboutBlock">{t("about", {ns: "header"})}</FooterLink>
                    <FooterLink scroll={false} href="/#whyUsBlock">{t("why", {ns: "header"})}</FooterLink>
                </FooterLinksDiv>
                <FooterLinksDiv>
                    <FooterLink scroll={false} href="/#howItWorksBlock">{t("how-works", {ns: "header"})}</FooterLink>
                    <FooterLink href="/funds">{t("withdraw", {ns: "header"})}</FooterLink>
                </FooterLinksDiv>
                <FooterLinksDiv>
                    <FooterLink href="/policy">{t("policy")}</FooterLink>
                    <FooterLink href="/terms">{t("terms")}</FooterLink>
                    <FooterLink href="/use">{t("use")}</FooterLink>
                    <FooterLink href="/cookie">{t("cookie")}</FooterLink>
                </FooterLinksDiv>
            </FooterContainer>
        )}
    </ThemeContext.Consumer>
}

export default Footer;