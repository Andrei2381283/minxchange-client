import Image from "next/image";
import React, { useState } from "react";
import { themes } from "../../../theme/theme";
import { addCurrenciesList1, addCurrenciesList2 } from "../../../utils/api";
import { WithdrawBlockBtn, WithdrawBlockFirstBlockBtnDiv, WithdrawBlockText } from "../styles";
import { AddCurrencyButton, AddCurrencyContainer, AddCurrencySelect } from "./styles";

const AddCurrency = ({ currencies, list, setList, type }) => {

    const [isOpen, setOpen] = useState(false);

    const onClick = (cur) => async () => {
        const addCurrenciesList = type ? addCurrenciesList2 : addCurrenciesList1;
        await addCurrenciesList({id: cur._id});
        setList(list.concat({id: cur._id, price: 0}));
        setOpen(false);
    }
    
    return <AddCurrencyContainer>
        {isOpen && <AddCurrencySelect>
            {currencies.map((v, i) => (
                <WithdrawBlockBtn key={i} theme={themes.light.name} style={i == 0 ? {marginTop: "0"} : {}} selected={false/* giveCrypto == i */} onClick={onClick(v)}>
                    <WithdrawBlockFirstBlockBtnDiv>
                        <Image alt="" width="24" height="24" src={v.icon} />
                        <WithdrawBlockText>{v.name}</WithdrawBlockText>
                    </WithdrawBlockFirstBlockBtnDiv>
                </WithdrawBlockBtn>
            ))}
        </AddCurrencySelect> || ""}
        <AddCurrencyButton onClick={() => setOpen(!isOpen)}>+</AddCurrencyButton>
    </AddCurrencyContainer>
}

export default AddCurrency;