import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from '../../../utils/translate';
import arrowDown from "../../../assets/arrowDown.svg";
import { ChangeLngContainer, ChangeLngElem, ChangeLngList } from './styles';
import { ThemeContext } from '../../../theme/theme';

const ChangeLang = ({ style, $pcElement, $mobileElement }) => {

    const [isOpen, setOpen] = useState(false);

    const { t, lang, changeLang } = useTranslation();

    const langs = ["en", "ru", "tu"];

    return <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
            <ChangeLngContainer style={style || {}} $pcElement={$pcElement} $mobileElement={$mobileElement} onClick={() => setOpen(!isOpen)}>
                <span>{lang.toUpperCase()}</span>
                <Image alt="" src={arrowDown} />
                {isOpen && (
                    <ChangeLngList theme={theme}>
                        {langs.map((elem, i) => <ChangeLngElem key={i} onClick={() => changeLang(elem)}>{elem}</ChangeLngElem>)}
                    </ChangeLngList>
                ) || ""}
            </ChangeLngContainer>
            )
        }
    </ThemeContext.Consumer>
}

export default ChangeLang;