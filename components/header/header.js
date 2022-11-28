import React from 'react';
import { useTranslation } from 'next-i18next';
import { ThemeContext, themes } from '../../theme/theme';
import Logo from '../logo/logo';
import ChangeLang from './changeLang/changeLang';
import { HeaderContainer, HeaderLink, HeaderThemeContainer, HeaderThemePoint } from "./styles";
import GreenBtn from '../greenBtn/greenBtn';
import LightBtn from '../lightBtn/lightBtn';

const Header = () => {

    const { t, i18n } = useTranslation("header");
    
    return <HeaderContainer>
        <Logo />
        <HeaderLink href="/about">{t("about")}</HeaderLink>
        <HeaderLink href="">{t("why")}</HeaderLink>
        <HeaderLink href="">{t("how-works")}</HeaderLink>
        <HeaderLink href="">{t("withdraw")}</HeaderLink>
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
        <GreenBtn small={true} style={{marginLeft: "2.5em"}}>{t("reg", {ns: "common"})}</GreenBtn>
        <LightBtn style={{marginLeft: "0.5em"}}>{t("login", {ns: "common"})}</LightBtn>
    </HeaderContainer>
}

export default Header;