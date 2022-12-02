import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import arrowDown from "../../../assets/arrowDown.svg";
import { ChangeLngContainer, ChangeLngElem, ChangeLngList } from './styles';
import nextI18nextConfig from '../../../next-i18next.config';

const ChangeLang = ({ style, $pcElement, $mobileElement }) => {

    const [isOpen, setOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const langs = nextI18nextConfig.i18n.locales;

    return <ChangeLngContainer style={style || {}} $pcElement={$pcElement} $mobileElement={$mobileElement} onClick={() => setOpen(!isOpen)}>
        <span>{i18n.language.toUpperCase()}</span>
        <Image src={arrowDown} />
        {isOpen && (
            <ChangeLngList>
                {langs.map((elem, i) => <ChangeLngElem key={i} href="" locale={elem}>{elem}</ChangeLngElem>)}
            </ChangeLngList>
        ) || ""}
    </ChangeLngContainer>
}

export default ChangeLang;