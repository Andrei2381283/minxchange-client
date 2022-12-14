import { useTranslation } from '../../utils/translate';
import cookie from "cookie";
import React, { useEffect, useState } from 'react';
import { ThemeContext, themes } from '../../theme/theme';
import GreenBtn from '../greenBtn/greenBtn';
import LightBtn from '../lightBtn/lightBtn';
import { MobileMenuContainer, MobileMenuDiv, MobileMenuLink } from './styles';
import { verifyToken } from '../../utils/api';

const MobileMenu = ({ isMobileMenuVisible, setMobileMenuVisible, showLogin }) => {

    const [init, setInit] = useState(false);

    const [verified, serVerified] = useState(false);

    useEffect(() => {
        if (!init) {
            setInit(true);
            (async () => {
                try {
                    const isVerified = await verifyToken(typeof document == "object" && cookie.parse(document.cookie).token);
                    serVerified(isVerified);
                } catch (err) {

                }
            })();
        }
    })

    const { t } = useTranslation("header");

    const [menuVisible, setMenuVisible] = useState(true);

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
                    {verified ? <>
                        <GreenBtn href="/admin" small={true} style={{ width: "auto", marginTop: "20px" }}>????????????????????</GreenBtn>
                    </> : <>
                        <GreenBtn style={{ width: "auto", marginTop: "20px" }} small={true}>{t("reg", { ns: "common" })}</GreenBtn>
                        <LightBtn onClick={() => showLogin(true)} style={{ width: "auto", marginTop: "10px" }} >{t("login", { ns: "common" })}</LightBtn>
                    </>}
                </MobileMenuDiv>
            }
        </ThemeContext.Consumer>
    </MobileMenuContainer>
}

export default MobileMenu;