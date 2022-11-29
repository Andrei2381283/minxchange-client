import React from 'react';
import { ThemeContext, themes } from '../../theme/theme';
import Logo from '../logo/logo';
import { FooterContainer, FooterLink, FooterLinksDiv } from "./styles";

const Footer = () => {

    return <ThemeContext.Consumer>
        {({ theme }) => (
            <FooterContainer theme={theme.name}>
                <Logo />
                <FooterLinksDiv>
                    <FooterLink href="">О нас</FooterLink>
                    <FooterLink href="">Почему мы</FooterLink>
                </FooterLinksDiv>
                <FooterLinksDiv>
                    <FooterLink href="">Как это работает</FooterLink>
                    <FooterLink href="">Ввод/Вывод средств</FooterLink>
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