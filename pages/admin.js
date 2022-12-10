import React, { useEffect, useState } from "react";
import cookie from "cookie";
import AdminDropDown from "../components/adminDropDown/adminDropDown";
import ContentEdit from "../components/contentEdit/contentEdit";
import WithdrawBlock from "../components/withdrawBlock/withdrawBlock";
import { AdminSave, AdminSection } from "../styles/admin";
import { getContent, saveContentItem } from "../utils/api";
import { GlobalStyle } from "../styles/globals";
import { themes } from "../theme/theme";


export async function getServerSideProps({ req }) {
    const locales = await getContent(cookie.parse(req.headers.cookie || "").lang || "ru");
    
    const ns = {};

    locales.forEach(element => {
        if(!element.headerContent || !element.language) return;
        if(!ns[element.headerContent]) ns[element.headerContent] = {};
        ns[element.headerContent][element.idContent] = element.textContent;
    });

    return {
        props: {
            _theme: cookie.parse(req.headers.cookie || "").theme || "Light",
            lang:  cookie.parse(req.headers.cookie || "").lang || "ru",
            ns
        }
    };
}

export default function Admin(props) {

    const [content, setContent] = useState([]);

    /* useEffect(() => {
        if(!content.length)getContent("").then(setContent);
    }) */

    if(!content.length) getContent("").then(setContent);
    
    /* const content = await getContent();

    console.log(content); */

    const data = {};

    content.forEach(element => {
        if(!element.headerContent || !element.language) return;
        if(!data[element.headerContent]) data[element.headerContent] = {};
        if(!data[element.headerContent][element.idContent]) data[element.headerContent][element.idContent] = {};
        data[element.headerContent][element.idContent][element.language] = element;
    });

    const changedItems = {};

    //console.log(changedItems);

    const Save = async () => {
        await saveContentItem(Object.keys(changedItems).map(v => changedItems[v]));
        alert(`Saved ${Object.keys(changedItems).length} items`);
        for(const i in changedItems) delete changedItems[i];
    }

    return  <>
        <GlobalStyle theme={themes.light} />
        <AdminSection>
            {Object.keys(data).map(ns => (
                <AdminDropDown /* changedItems={changedItems} titleField="headerContent" items={Object.keys(data[ns]).map(v => Object.keys(data[ns][v]).map(v2 => data[ns][v][v2])).flat(Infinity)} */ key={ns} title={ns}>
                    {Object.keys(data[ns]).map(elem => (
                        <AdminDropDown /* changedItems={changedItems} titleField="idContent" items={Object.keys(data[ns][elem]).map(v =>  data[ns][elem][v]).flat(Infinity)} */ key={elem} title={elem}>
                            <ContentEdit changedItems={changedItems} data={data[ns][elem]} />
                        </AdminDropDown>
                    ))}
                </AdminDropDown>
            ))}
            <AdminSave onClick={Save}>Save</AdminSave>
        </AdminSection>
        <AdminSection>
            <WithdrawBlock admin={true}>

            </WithdrawBlock>
        </AdminSection>
    </>
}