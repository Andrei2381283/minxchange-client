import "../styles/style.css";
import "../assets/font/stylesheet.css";
import { TranslationContext, useTranslation } from '../utils/translate';
import { useState } from 'react';
import { getContent } from "../utils/api";

function MyApp({ Component, pageProps }) {

  const [translation, setTranslation] = useState({ns: pageProps.ns, lang: pageProps.lang});

  const changeLang = async (_lang) => {
    const locales = await getContent(_lang);
    
    const _ns = {};

    locales.forEach(element => {
        if(!element.headerContent || !element.language) return;
        if(!_ns[element.headerContent]) _ns[element.headerContent] = {};
        _ns[element.headerContent][element.idContent] = element.textContent;
    });
    setTranslation({ns: _ns, lang: _lang});
    document.cookie = "lang=" + _lang + "; path=/";
  }
  return (
    <TranslationContext.Provider value={{...translation, changeLang}}>
      <Component {...pageProps} />
    </TranslationContext.Provider>
  )
}

export default /* appWithTranslation */(MyApp/* , { ...nextI18nextConfig, resources: {} } */);
