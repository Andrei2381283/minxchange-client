import React, { useContext, useState } from "react";
import { getContent } from "./api";

/* export const setLang = async (lang) => {
    const locales = await getContent(lang);

    const ns = {};

    locales.forEach(element => {
        if(!element.headerContent || !element.language) return;
        if(!ns[element.headerContent]) ns[element.headerContent] = {};
        ns[element.headerContent][element.idContent] = element.textContent;
    });

    translations = (ns);
    return ns;
} */

/* export const setTrans = (trans) => {
    translations = trans;
} */

export const TranslationContext = React.createContext({ns: {}, lang: "", changeLang: () => {}});

export const useTranslation = (header = "common") => {
    //const [translations, setTranslations] = useState({});

    /* if(!_state) _state = useState("");

    console.log(_state);

    const [_lang, _setLang] = _state; */

    // const setLang = async (lang, trans) => {
    //     /* if(_lang == lang) return;

    //     const locales = await getContent(cookie.parse(req.headers.cookie || "").lang || "ru");
    
    //     const ns = {};

    //     locales.forEach(element => {
    //         if(!element.headerContent || !element.language) return;
    //         if(!ns[element.headerContent]) ns[element.headerContent] = {};
    //         ns[element.headerContent][element.idContent] = element.textContent;
    //     });

    //     translations[lang] = ns; */

    //     if(trans) translations = trans;

    //     //_setLang(lang);
    //     _lang = lang;
    //     document.cookie = "lang=" + lang + "; path=/";
    // }

    //console.log(translations);

    const {ns, lang, changeLang} = useContext(TranslationContext);

    const t = (id, config) => {
        return (ns[config?.ns || header] || {})[id] || id;
    }

    return {t, ns, lang, changeLang};
}