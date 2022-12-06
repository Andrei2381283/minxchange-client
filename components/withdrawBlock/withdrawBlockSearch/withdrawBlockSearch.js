import React from 'react';
import { WithdrawBlockSearchInput, WithdrawBlockSearchImg, WithdrawBlockSearchLabel } from './styles';
import search from "../../../assets/search.svg";
import searchD from "../../../assets/searchD.svg";
import { useTranslation } from 'next-i18next';

const WithdrawBlockSearch = ({children, style, theme}) => {

    const { t, i18n } = useTranslation("index");

    return <WithdrawBlockSearchLabel>
        <WithdrawBlockSearchInput theme={theme} placeholder={t("search", {ns:"common"})} type="text" />
        <WithdrawBlockSearchImg src={theme == "Light" ? search : searchD} alt="Search image" />
    </WithdrawBlockSearchLabel>
}

export default WithdrawBlockSearch;