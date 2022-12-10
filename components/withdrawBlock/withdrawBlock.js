import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { WithdrawBlockBtn, WithdrawBlockBtn3div, WithdrawBlockBtn3divdiv, WithdrawBlockBtnTime, WithdrawBlockContainer, WithdrawBlockDiv, WithdrawBlockDivTitle, WithdrawBlockExchangeImg, WithdrawBlockFirstBlockBtnDiv, WithdrawBlockRemove, WithdrawBlockSubText, WithdrawBlockSubTextInput, WithdrawBlockText, WithdrawBlockTopDiv } from './styles';
import btc from "../../assets/btc.svg";
import exchange from "../../assets/exchange.svg";
import del from "../../assets/del.svg";
import WithdrawBlockSearch from './withdrawBlockSearch/withdrawBlockSearch';
import { ThemeContext } from '../../theme/theme';
import { useTranslation } from '../../utils/translate';
import AddCurrency from './addCurrency/addCurrency';
import { getCurrencies, getCurrenciesList1, getCurrenciesList2, removeCurrenciesList1, removeCurrenciesList2, updateCurrenciesList2 } from '../../utils/api';

const priceChanges = {};

setInterval(async () => {
    if(Object.keys(priceChanges).length) {
        const arr = [];
        for(const i in priceChanges){
            arr.push({...priceChanges[i], index: i});
            delete priceChanges[i];
            await updateCurrenciesList2(arr);
        }
    }
}, 2000)

const WithdrawBlock = ({ admin, children, style }) => {

    const { t } = useTranslation("index");

    const [init, setInit] = useState(false);

    const [currencies, setCurrencies] = useState([]);

    const [list1, setList1] = useState([]);

    const [list2, setList2] = useState([]);

    useEffect(() => {
        if(!init) {
            setInit(true);
            (async () => {
                setCurrencies(await getCurrencies());
                setList1(await getCurrenciesList1());
                setList2(await getCurrenciesList2());
            })();
        }
    })

    const [giveMode, setGiveMode] = useState(0);
    const changeGiveMode = (mode) => () => setGiveMode(mode);

    const [giveCrypto, setGiveCrypto] = useState(0);
    const changeGiveCrypto = (mode) => () => setGiveCrypto(mode);

    const [getMode, setGetMode] = useState(0);
    const changeGetMode = (mode) => () => setGetMode(mode);

    const [getCrypto, setGetCrypto] = useState(0);
    const changeGetCrypto = (mode) => () => setGetCrypto(mode);


    const currenciesMap = {};

    for(const currencie of currencies){
        currenciesMap[currencie._id] = currencie;
    }


    const changePrice = (cur, index) => ({ target }) => {
        //console.log(cur, target.value);
        target.value = target.value.replace(/[^0-9\.]+/g, "");
        priceChanges[index] = {price: Number(target.value)};
        list2[index].price = target.value;
        setList2(list2);
    }

    const removeCur = (index, type) => () => {
        console.log(index, type);
        const removeCurrenciesList = !type ? removeCurrenciesList1 : removeCurrenciesList2;
        removeCurrenciesList(index);
        if(type){
            if(giveCrypto == index)changeGiveCrypto(Math.max(index - 1, 0));
            list2.splice(index, 1);
            setList2(list2);
        } else {
            if(getCrypto == index)changeGetMode(Math.max(index - 1, 0));
            list1.splice(index, 1);
            setList1(list1);
        }
    }


    return <WithdrawBlockContainer style={style || {}}>
        <ThemeContext.Consumer>
            {({ theme }) => (
                <>
                    <WithdrawBlockDiv theme={theme.name}>
                        <WithdrawBlockDivTitle>{t("give")}</WithdrawBlockDivTitle>
                        <WithdrawBlockTopDiv>
                            <WithdrawBlockBtn theme={theme.name} selected={giveMode == 0} onClick={changeGiveMode(0)} small >{t("all", {ns:"common"})}</WithdrawBlockBtn>
                            {currencies.map((v, i) => 
                                <WithdrawBlockBtn key={(i + 1)} theme={theme.name} selected={giveMode == (i + 1)} onClick={changeGiveMode((i + 1))} small style={{ marginLeft: "0.5rem" }}>{v.symbol}</WithdrawBlockBtn>)
                            }
                        </WithdrawBlockTopDiv>
                        <WithdrawBlockSearch theme={theme.name} />
                        {list1.map((v, i) => !giveMode || currencies[giveMode - 1]._id == v.id ? (
                            <WithdrawBlockBtn style={i == 0 ? { marginTop: "1rem" } : {}} key={i} theme={theme.name} selected={giveCrypto == i} onClick={changeGiveCrypto(i)}>
                                <WithdrawBlockFirstBlockBtnDiv>
                                    <Image width="24" height="24" alt="" src={currenciesMap[v.id].icon} />
                                    <WithdrawBlockText>{currenciesMap[v.id].name}</WithdrawBlockText>
                                </WithdrawBlockFirstBlockBtnDiv>
                                {admin && <WithdrawBlockRemove alt="Delete" src={del} onClick={removeCur(i, 0)} /> || ""}
                            </WithdrawBlockBtn>
                        ) : "")}
                        {admin && <AddCurrency type={0} list={list1} setList={setList1} currencies={currencies} /> || ""}
                    </WithdrawBlockDiv>
                    <WithdrawBlockDiv theme={theme.name}>
                        <WithdrawBlockDivTitle>{t("get")}</WithdrawBlockDivTitle>
                        <WithdrawBlockTopDiv>
                            <WithdrawBlockBtn theme={theme.name} selected={getMode == 0} onClick={changeGetMode(0)} small >{t("all", {ns:"common"})}</WithdrawBlockBtn>
                            {currencies.map((v, i) => 
                                <WithdrawBlockBtn key={(i + 1)} theme={theme.name} selected={getMode == (i + 1)} onClick={changeGetMode((i + 1))} small style={{ marginLeft: "0.5rem" }}>{v.symbol}</WithdrawBlockBtn>)
                            }
                        </WithdrawBlockTopDiv>
                        <WithdrawBlockSearch theme={theme.name} />
                        {list2.map((v, i) => !getMode || currencies[getMode - 1]._id == v.id ? (
                            <WithdrawBlockBtn style={i == 0 ? { marginTop: "1rem" } : {}} key={i} theme={theme.name} selected={getCrypto == i} onClick={changeGetCrypto(i)}>
                                <WithdrawBlockFirstBlockBtnDiv>
                                    <Image width="24" height="24" alt="" src={currenciesMap[v.id].icon} />
                                    <WithdrawBlockText>{currenciesMap[v.id].name}</WithdrawBlockText>
                                </WithdrawBlockFirstBlockBtnDiv>
                                {
                                    admin ? 
                                    <WithdrawBlockSubTextInput theme={theme.name} selected={getCrypto == i} onChange={changePrice(v,i)} defaultValue={v.price} /> :
                                    <WithdrawBlockSubText theme={theme.name} selected={getCrypto == i}>{v.price}</WithdrawBlockSubText>
                                }
                                {admin && <WithdrawBlockRemove alt="Delete" src={del} onClick={removeCur(i, 1)} /> || ""}
                            </WithdrawBlockBtn>
                        ) : "")}
                        {admin && <AddCurrency type={1} list={list2} setList={setList2} currencies={currencies} /> || ""}
                    </WithdrawBlockDiv>
                    <WithdrawBlockDiv theme={theme.name}>
                        <WithdrawBlockDivTitle>{t("trades")}</WithdrawBlockDivTitle>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg alt="" src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg alt="" src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg alt="" src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg alt="" src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg alt="" src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg alt="" src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg alt="" src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg alt="" src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image alt="" src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                    </WithdrawBlockDiv>
                </>
            )}
        </ThemeContext.Consumer>
    </WithdrawBlockContainer>
}

export default WithdrawBlock;