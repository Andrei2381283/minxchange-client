import React from 'react';

import { useState } from 'react';
import Footer from '../footer/footer'
import Header from '../header/header'
import { GlobalStyle } from '../../styles/globals.js'
import { ThemeContext, themes } from '../../theme/theme';

function Page({ children }) {
  const [theme, setTheme] = useState(themes[/* typeof localStorage !== 'undefined' && localStorage.getItem("theme") || */ "light"]);

  function changeTheme(theme) {
    setTheme(theme);
    localStorage.setItem("theme", theme.name.toLowerCase());
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
