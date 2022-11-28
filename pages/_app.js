import { appWithTranslation } from 'next-i18next';
import "../assets/font/stylesheet.css";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default appWithTranslation(MyApp);
