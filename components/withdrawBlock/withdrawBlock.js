import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { WithdrawBlockBtn, WithdrawBlockBtn3div, WithdrawBlockBtn3divdiv, WithdrawBlockBtnTime, WithdrawBlockContainer, WithdrawBlockDiv, WithdrawBlockDivTitle, WithdrawBlockExchangeImg, WithdrawBlockFirstBlockBtnDiv, WithdrawBlockRemove, WithdrawBlockSubText, WithdrawBlockSubTextInput, WithdrawBlockText, WithdrawBlockTopDiv, WithdrawInput, WithdrawShortDiv } from './styles';
import btc from "../../assets/btc.svg";
import tetherExchange from "../../assets/tetherExchange.svg";
import exchange from "../../assets/exchange.svg";
import del from "../../assets/del.svg";
import WithdrawBlockSearch from './withdrawBlockSearch/withdrawBlockSearch';
import { ThemeContext } from '../../theme/theme';
import { useTranslation } from '../../utils/translate';
import AddCurrency from './addCurrency/addCurrency';
import { editCurrency, getCurrencies } from '../../utils/api';
import WithdrawList from './withdrawList/withdrawList';
import GreenBtn from '../greenBtn/greenBtn';

/* const currencies = [
    {
        _id: "asdqweqwe123",
        icon: tetherExchange,
        title: "Tether USDT (TRC20)",
        short: "USDT",
        deps: [{id: "asdqweqwe124", ratio: 22}],
        minCount: 1
    },
    {
        _id: "asdqweqwe124",
        icon: btc,
        title: "Bitcoin (BTC)",
        short: "BTC",
        deps: [{id: "asdqweqwe123", ratio: 1/22}],
        minCount: 1
    }
]; */

const editCurrencies = {};

const WithdrawBlock = ({ admin, children, style }) => {

    const { t } = useTranslation("index");

    const [ editMode, setEditMode ] = useState(false);

    const [ init, setInit ] = useState(false);
    const [ currencies, setCurrencies ] = useState([]);

    const updateCurrencies = async () => {
        setCurrencies(await getCurrencies());
    }

    useEffect(() => {
        if(!init){
            setInit(true);
            (async () => {
                await updateCurrencies();
            })();
        }
    });

    useEffect(() => {
        if(!editMode){
            (async () => {
                const needUpdate = Object.keys(editCurrencies).length;
                for(const i in editCurrencies){
                    await editCurrency(i, editCurrencies[i]);
                    delete editCurrencies[i];
                }
                if(needUpdate){
                    await updateCurrencies();
                    setSecondSelected(secondSelected);
                }
            })();
        }
    }, [editMode]);

    const [ firstSelected, setFirstSelected ] = useState(0);
    const [ secondSelected, setSecondSelected ] = useState(0);

    const giveArr = currencies.filter(e => e.deps.find(e2 => e2.id == currencies[firstSelected]._id));

    const [ count, setCount ] = useState(currencies[firstSelected] && currencies[firstSelected].minCount || 0);
    const [ price, setPrice ] = useState(giveArr[secondSelected] && Number((giveArr[secondSelected].deps.find(e2 => e2.id == currencies[firstSelected]._id).ratio * currencies[firstSelected].minCount).toFixed(5)) || 0);

    const changeCount = ({ target } = {}) => {
        if(editMode) return;
        if(!target) target = {value: count};
        if(!Number(target.value)) return setCount(target.value);
        const val = target.value = Math.max(Number(target.value), currencies[firstSelected].minCount);
        //console.log(1, val, Number((giveArr[secondSelected].deps.find(e2 => e2.id == currencies[firstSelected]._id).ratio * val).toFixed(5)));
        setCount(val);
        setPrice(Number((giveArr[secondSelected].deps.find(e2 => e2.id == currencies[firstSelected]._id).ratio * val).toFixed(5)));
    }

    const changePrice = ({ target } = {}) => {
        if(!target) target = {value: price};
        if(!Number(target.value)) return setPrice(target.value);
        const val = target.value = Number(target.value);
        if(editMode){
            if(!target) return;

            const item1 = giveArr[secondSelected];
            const deps1 = item1.deps.find(e => e.id == currencies[firstSelected]._id);
            deps1.ratio = val;
            if(!editCurrencies[item1._id]) editCurrencies[item1._id] = {};
            editCurrencies[item1._id].deps = item1.deps;

            const item2 = currencies[firstSelected];
            const deps2 = item2.deps.find(e => e.id == giveArr[secondSelected]._id);
            deps2.ratio = 1/val;
            if(!editCurrencies[item2._id]) editCurrencies[item2._id] = {};
            editCurrencies[item2._id].deps = item2.deps;

            setPrice(val);
            
            return;
        }
        //console.log(2, val, Number((currencies[firstSelected].deps.find(e2 => e2.id == giveArr[secondSelected]._id).ratio * val).toFixed(5)));
        setPrice(val);
        setCount(Number((currencies[firstSelected].deps.find(e2 => e2.id == giveArr[secondSelected]._id).ratio * val).toFixed(5)));
    }

    const changeShortName = (element) => ({ target }) => {
        if(!editCurrencies[element._id]) editCurrencies[element._id] = {};
        editCurrencies[element._id].short = element.short = target.value;
    }

    useEffect(() => {
        changePrice();
    }, [secondSelected]);

    useEffect(() => {
        changeCount();
    }, [firstSelected]);

    const [ init_, setInit_ ] = useState(false);
    useEffect(() => {
        if(!init_ && !count && currencies[firstSelected] && giveArr[secondSelected]){
            setInit_(true);
            changeCount({ target: { value: 1 }});
        }
    });

    return <WithdrawBlockContainer style={style || {}}>
        <ThemeContext.Consumer>
            {({ theme }) => (
                <>
                    <WithdrawBlockDiv theme={theme.name}>
                        <WithdrawBlockDivTitle>{t("give")}</WithdrawBlockDivTitle>
                        <WithdrawList 
                            updateCurrencies={updateCurrencies} 
                            type={0} 
                            selected2={giveArr[secondSelected]} 
                            editCurrencies={editCurrencies} 
                            editMode={editMode} 
                            onSelectItem={setFirstSelected} 
                            items={currencies}
                            currencies={currencies}
                        />
                        <WithdrawInput 
                            onChange={changeCount} 
                            value={count} 
                            theme={theme.name} 
                            placeholder={currencies[firstSelected]?.short || ""} 
                        />
                        {editMode && <WithdrawShortDiv>
                            Short name: 
                            <WithdrawInput 
                                style={{ margin: "0", width: "auto", marginLeft: "1rem" }}
                                onChange={changeShortName(currencies[firstSelected])} 
                                defaultValue={currencies[firstSelected]?.short || ""} 
                                theme={theme.name}
                            />
                        </WithdrawShortDiv> || ""}
                    </WithdrawBlockDiv>
                    <WithdrawBlockDiv theme={theme.name}>
                        <WithdrawBlockDivTitle>{t("get")}</WithdrawBlockDivTitle>
                        <WithdrawList 
                            updateCurrencies={updateCurrencies} 
                            type={1} 
                            selected2={currencies[firstSelected]} 
                            editCurrencies={editCurrencies} 
                            editMode={editMode} 
                            onSelectItem={setSecondSelected} 
                            items={giveArr} 
                            currencies={currencies}
                        />
                        <WithdrawInput 
                            onChange={changePrice} 
                            {...(editMode ? {defaultValue: price} : {value: price})}
                            theme={theme.name} 
                            placeholder={giveArr[secondSelected]?.short || ""} 
                        />
                        {editMode && <WithdrawShortDiv>
                            Short name: 
                            <WithdrawInput 
                                style={{ margin: "0", width: "auto", marginLeft: "1rem" }}
                                onChange={changeShortName(giveArr[secondSelected])} 
                                defaultValue={giveArr[secondSelected]?.short || ""} 
                                theme={theme.name}
                            />
                        </WithdrawShortDiv> || ""}
                        {admin && <GreenBtn onClick={() => setEditMode(!editMode)} style={{ marginTop: "2rem", width: "auto" }}>{editMode ? "Сохранить" : "Редактировать"}</GreenBtn> || ""}
                    </WithdrawBlockDiv>
                </>
            )}
        </ThemeContext.Consumer>
    </WithdrawBlockContainer>
}

export default WithdrawBlock;