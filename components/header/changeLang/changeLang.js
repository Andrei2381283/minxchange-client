import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import arrowDown from "../../../assets/arrowDown.svg";
import { ChangeLngContainer, ChangeLngElem, ChangeLngList } from './styles';
import nextI18nextConfig from '../../../next-i18next.config';
import { ThemeContext } from '../../../theme/theme';

const ChangeLang = ({ style, $pcElement, $mobileElement }) => {

    const [isOpen, setOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const langs = nextI18nextConfig.i18n.locales;

    return <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
            <ChangeLngContainer style={style || {}} $pcElement={$pcElement} $mobileElement={$mobileElement} onClick={() => setOpen(!isOpen)}>
                <span>{i18n.language.toUpperCase()}</span>
                <Image src={arrowDown} />
                {isOpen && (
                    <ChangeLngList theme={theme}>
                        {langs.map((elem, i) => <ChangeLngElem key={i} href="" locale={elem}>{elem}</ChangeLngElem>)}
                    </ChangeLngList>
                ) || ""}
            </ChangeLngContainer>
            )
        }
    </ThemeContext.Consumer>
}

export default ChangeLang;