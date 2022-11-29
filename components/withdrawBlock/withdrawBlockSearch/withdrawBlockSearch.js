import React from 'react';
import { WithdrawBlockSearchInput, WithdrawBlockSearchImg, WithdrawBlockSearchLabel } from './styles';
import search from "../../../assets/search.svg";
import searchD from "../../../assets/searchD.svg";

const WithdrawBlockSearch = ({children, style, theme}) => {

    return <WithdrawBlockSearchLabel>
        <WithdrawBlockSearchInput theme={theme} placeholder='Поиск' type="text" />
        <WithdrawBlockSearchImg src={theme == "Light" ? search : searchD} alt="Search image" />
    </WithdrawBlockSearchLabel>
}

export default WithdrawBlockSearch;