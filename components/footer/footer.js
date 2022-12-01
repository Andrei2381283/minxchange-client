import React from 'react';
import { ThemeContext, themes } from '../../theme/theme';
import Logo from '../logo/logo';
import { FooterContainer, FooterLink, FooterLinksDiv } from "./styles";

const Footer = () => {

    return <ThemeContext.Consumer>
        {({ theme }) => (
            <FooterContainer theme={theme.name}>
                <Logo isLink />
                <FooterLinksDiv>
                    <FooterLink scroll={false} href="/#aboutBlock">О нас</FooterLink>
                    <FooterLink scroll={false} href="/#whyUsBlock">Почему мы</FooterLink>
                </FooterLinksDiv>
                <FooterLinksDiv>
                    <FooterLink scroll={false} href="/#howItWorksBlock">Как это работает</FooterLink>
                    <FooterLink href="/funds">Ввод/Вывод средств</FooterLink>
                </FooterLinksDiv>
                <FooterLinksDiv>
                    <FooterLink href="">Политика конфиденциальности</FooterLink>
                    <FooterLink href="">Пользовательское соглашение</FooterLink>
                    <FooterLink href="">Условия использования</FooterLink>
                    <FooterLink href="">Политика использования cookie</FooterLink>
                </FooterLinksDiv>
            </FooterContainer>
        )}
    </ThemeContext.Consumer>
}

export default Footer;