import React, { useContext } from "react";

export const TranslationContext = React.createContext({ns: {}, lang: "", changeLang: () => {}});

export const useTranslation = (header = "common") => {

    const {ns, lang, changeLang} = useContext(TranslationContext);

    const t = (id, config) => {
        return (ns[config?.ns || header] || {})[id] || id;
    }

    return {t, ns, lang, changeLang};
}