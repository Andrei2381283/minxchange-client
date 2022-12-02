import React from 'react';

import { useState } from 'react';
import Footer from '../footer/footer'
import Header from '../header/header'
import { GlobalStyle } from '../../styles/globals.js'
import { ThemeContext, themes } from '../../theme/theme';

function Page({ children, _theme }) {
  const [theme, setTheme] = useState(themes[_theme.toLowerCase()]);

  function changeTheme(theme) {
    setTheme(theme);
    document.cookie = "theme=" + theme.name + "; path=/";
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      <GlobalStyle theme={theme} />
      <Header />
      {children}
      <Footer />
    </ThemeContext.Provider>
  )
}

export default Page;
