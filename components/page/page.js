import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../footer/footer'
import Header from '../header/header'
import { GlobalStyle } from '../../styles/globals.js'
import { ThemeContext, themes } from '../../theme/theme';
import MobileMenu from '../mobileMenu/mobileMenu';
import { TranslationContext, useTranslation } from '../../utils/translate';
import LoginPopup from '../loginPopup/loginPopup';

function Page({ children, _theme, lang, ns }) {
  const [theme, setTheme] = useState(themes[_theme.toLowerCase()]);

  function changeTheme(theme) {
    setTheme(theme);
    document.cookie = "theme=" + theme.name + "; path=/";
  }

  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const [loginOpen, showLogin] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle theme={theme} />
      <LoginPopup loginOpen={loginOpen} showLogin={showLogin} />
      <MobileMenu isMobileMenuVisible={isMobileMenuVisible} setMobileMenuVisible={setMobileMenuVisible} />
      <Header loginOpen={loginOpen} showLogin={showLogin} isMobileMenuVisible={isMobileMenuVisible} setMobileMenuVisible={setMobileMenuVisible} />
      {children}
      <Footer />
    </ThemeContext.Provider>
  )
}

export default Page;
