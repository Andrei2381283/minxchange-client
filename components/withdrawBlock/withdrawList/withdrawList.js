import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../../theme/theme";
import { addCurrency, removeCurrency } from "../../../utils/api";
import { WithdrawBlockRemove } from "../styles";
import WithdrawChangeImg from "../withdrawChangeImg/withdrawChangeImg";
import del from "../../../assets/del.svg";
import { WithdrawListAdd, WithdrawListContainer, WithdrawListItem, WithdrawListItemsDiv, WithdrawListSelect, WithdrawListSelected, WithdrawListSelectedTitle, WithdrawListSelectedTitleInput } from "./styles";
import GreenBtn from "../../greenBtn/greenBtn";

const WithdrawList = ({ currencies, updateCurrencies, type, selected2, editCurrencies, editMode, items, onSelectItem = () => {} }) => {

    const [ selectedItem, selectItem ] = useState(0);

    const [ showList, setShowList ] = useState(false);

    const [ isOpen, setOpen ] = useState(false);

    const { theme } = useTheme();

    useEffect(() => {
        if(isOpen == "hide_"){
            setTimeout(() => {
                setOpen(false);
            }, 300);
            setOpen("hide");
        }
    })

    const select = (i) => {
        selectItem(i);
        onSelectItem(i);
    }

    const toggleOpen = () => {
        if(isOpen === true){
            setOpen("hide_")
        } else if(isOpen === false) {
            setOpen(true);
        }
    }

    const addCurrencyItem = async () => {
        const item = await addCurrency({
            icon: "",
            title: "Empty",
            short: "Empty",
            deps: [{id: selected2._id, ratio: 1}],
            minCount: 1
        });
        selected2.deps.push({id: item._id, ratio: 1});
        if(!editCurrencies[selected2._id]) editCurrencies[selected2._id] = {};
        editCurrencies[selected2._id].deps = selected2.deps;
        //console.log(editCurrencies);
        updateCurrencies();
        select(selectedItem);
    }

    const addCurrencyForLeft = (item) => {
        if(item.deps.find(e => e.id == selected2._id)) return;

        selected2.deps.push({id: item._id, ratio: 1});
        if(!editCurrencies[selected2._id]) editCurrencies[selected2._id] = {};
        editCurrencies[selected2._id].deps = selected2.deps;

        item.deps.push({id: selected2._id, ratio: 1});
        if(!editCurrencies[item._id]) editCurrencies[item._id] = {};
        editCurrencies[item._id].deps = item.deps;
        
        items.push(item);
        select(selectedItem);
    }

    const removeItem = (id) => async () => {
        await removeCurrency(id);
        updateCurrencies();
        select(selectedItem);
    }

    const changeTitle = (element) => ({ target }) => {
        if(!editCurrencies[element._id]) editCurrencies[element._id] = {};
        editCurrencies[element._id].title = element.title = target.value;
    }

    const changeIcon = (element) => (icon) => {
        if(!editCurrencies[element._id]) editCurrencies[element._id] = {};
        editCurrencies[element._id].icon = element.icon = icon;
    }

    return <WithdrawListContainer>
        <WithdrawListSelected isOpen={isOpen} onClick={() => toggleOpen()} theme={theme.name}>
            {items[selectedItem] && (editMode ? <WithdrawChangeImg onNewImg={changeIcon(items[selectedItem])} defaultImg={items[selectedItem]?.icon} /> : <Image width="24" height="24" src={items[selectedItem]?.icon} alt="" />) || ""}
            {
                editMode ? 
                <WithdrawListSelectedTitleInput onChange={changeTitle(items[selectedItem])} defaultValue={items[selectedItem]?.title || ""} /> :
                <WithdrawListSelectedTitle>{items[selectedItem]?.title || ""}</WithdrawListSelectedTitle>
            }
        </WithdrawListSelected>
        {isOpen && <WithdrawListItemsDiv theme={theme.name} isOpen={isOpen}>
            {
                items.map((elem, index) => <WithdrawListItem key={index} onClick={() => !editMode && (select(index) || toggleOpen())}>
                    {editMode ? <WithdrawChangeImg onNewImg={changeIcon(elem)} defaultImg={elem.icon} /> : <Image width="24" height="24" src={elem.icon} alt="" />}
                    {
                        editMode ? 
                        <WithdrawListSelectedTitleInput onChange={changeTitle(elem)} defaultValue={elem.title} /> :
                        <WithdrawListSelectedTitle>{elem.title}</WithdrawListSelectedTitle>
                    }
                    {editMode && <WithdrawBlockRemove alt="" onClick={removeItem(elem._id)} src={del} /> || ""}
                </WithdrawListItem>)
            }
            <div>
                {editMode && isOpen && showList && type && <WithdrawListSelect>
                    {currencies.filter(elem => elem != items[selectedItem] && elem != selected2 && !items.includes(elem)).map((elem, index) => <WithdrawListItem key={index} onClick={() => addCurrencyForLeft(elem) || setShowList(false)}>
                        <Image width="24" height="24" src={elem.icon} alt="" />
                        <WithdrawListSelectedTitle>{elem.title}</WithdrawListSelectedTitle>
                    </WithdrawListItem>)}
                    <GreenBtn onClick={() => addCurrencyItem() && setShowList(false)} small style={{ margin: "1rem auto", width: "125px" }}>New</GreenBtn>
                </WithdrawListSelect> || ""}
            </div>
            {editMode && <WithdrawListAdd onClick={() => type ? setShowList(!showList) : addCurrencyItem()}>+</WithdrawListAdd> || ""}
        </WithdrawListItemsDiv> || ""}
    </WithdrawListContainer>
}

export default WithdrawList;