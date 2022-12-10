import React from 'react';
import { useTranslation } from '../../utils/translate';
import { ThemeContext, themes } from '../../theme/theme';
import Logo from '../logo/logo';
import ChangeLang from './changeLang/changeLang';
import { HeaderContainer, HeaderLink, HeaderMobileMenu, HeaderMobileMenuLine, HeaderThemeContainer, HeaderThemePoint } from "./styles";
import GreenBtn from '../greenBtn/greenBtn';
import LightBtn from '../lightBtn/lightBtn';

const Header = ({ isMobileMenuVisible, setMobileMenuVisible }) => {

    const { t, i18n } = useTranslation("header");
    
    return <HeaderContainer>
        <HeaderMobileMenu onClick={() => setMobileMenuVisible(!isMobileMenuVisible)} >
            <HeaderMobileMenuLine />
            <HeaderMobileMenuLine />
            <HeaderMobileMenuLine />
        </HeaderMobileMenu>
        <Logo isLink />
        <HeaderLink $pcElement scroll={false} href="/#aboutBlock">{t("about")}</HeaderLink>
        <HeaderLink $pcElement scroll={false} href="/#whyUsBlock">{t("why")}</HeaderLink>
        <HeaderLink $pcElement scroll={false} href="/#howItWorksBlock">{t("how-works")}</HeaderLink>
        <HeaderLink $pcElement href="/funds">{t("withdraw")}</HeaderLink>
        <ThemeContext.Consumer>
            {({theme, changeTheme}) => 
            <>
                <HeaderThemeContainer onClick={() => changeTheme(theme == themes.light ? themes.dark : themes.light)}>
                    <span>{theme.name}</span>
                    <HeaderThemePoint color={theme == themes.dark ? "255, 255, 255" : "22, 35, 41"} />
                </HeaderThemeContainer>
            </>
            }
        </ThemeContext.Consumer>
        <ChangeLang />
        <GreenBtn $pcElement small={true} style={{marginLeft: "2.5em"}}>{t("reg", {ns: "common"})}</GreenBtn>
        <LightBtn $pcElement style={{marginLeft: "0.5em"}}>{t("login", {ns: "common"})}</LightBtn>
    </HeaderContainer>
}

export default Header;