import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { ThemeContext, themes } from '../../theme/theme';
import GreenBtn from '../greenBtn/greenBtn';
import ChangeLang from '../header/changeLang/changeLang';
import { HeaderThemeContainer, HeaderThemePoint } from '../header/styles';
import LightBtn from '../lightBtn/lightBtn';
import { MobileMenuContainer, MobileMenuDiv, MobileMenuLink } from './styles';

const MobileMenu = ({ isMobileMenuVisible, setMobileMenuVisible }) => {

    const { t, i18n } = useTranslation("header");

    const [menuVisible, setMenuVisible] = useState(true);
    console.log(menuVisible, isMobileMenuVisible);

    const hide = () => {
        if (!menuVisible) return;
        setMenuVisible(false);
        setTimeout(() => {
            setMobileMenuVisible(false);
            setMenuVisible(true);
        }, 200);
    }

    return <MobileMenuContainer onClick={(event) => event.nativeEvent.path.length != 7 && hide()} show={isMobileMenuVisible}>
        <ThemeContext.Consumer>
            {({ theme, changeTheme }) =>
                <MobileMenuDiv theme={theme.name} show={menuVisible && isMobileMenuVisible}>
                    <MobileMenuLink scroll={false} href="/#aboutBlock">{t("about")}</MobileMenuLink>
                    <MobileMenuLink scroll={false} href="/#whyUsBlock">{t("why")}</MobileMenuLink>
                    <MobileMenuLink scroll={false} href="/#howItWorksBlock">{t("how-works")}</MobileMenuLink>
                    <MobileMenuLink href="/funds">{t("withdraw")}</MobileMenuLink>
                    <GreenBtn style={{ width: "auto", marginTop: "20px" }} small={true}>{t("reg", { ns: "common" })}</GreenBtn>
                    <LightBtn style={{ width: "auto", marginTop: "10px" }} >{t("login", { ns: "common" })}</LightBtn>
                    {/* <HeaderThemeContainer style={{margin: "30px auto 0", fontSize: "20px"}} onClick={() => changeTheme(theme == themes.light ? themes.dark : themes.light)}>
                        <span>{theme.name}</span>
                        <HeaderThemePoint color={theme == themes.dark ? "255, 255, 255" : "22, 35, 41"} />
                    </HeaderThemeContainer>
                    <ChangeLang style={{margin: "30px auto 0", fontSize: "20px"}} /> */}
                </MobileMenuDiv>
            }
        </ThemeContext.Consumer>
    </MobileMenuContainer>
}

export default MobileMenu;