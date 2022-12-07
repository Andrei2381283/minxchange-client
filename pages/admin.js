import React, { useEffect, useState } from "react";
import AdminDropDown from "../components/adminDropDown/adminDropDown";
import ContentEdit from "../components/contentEdit/contentEdit";
import { AdminSection } from "../styles/admin";
import { getContent } from "../utils/api";

export default function Admin(props) {

    const [content, setContent] = useState([]);

    useEffect(() => {
        if(!content.length)getContent("").then(setContent);
    })
    
    /* const content = await getContent();

    console.log(content); */

    const data = {};

    content.forEach(element => {
        if(!element.headerContent || !element.language) return;
        /* if(!data[element.language]) data[element.language] = {};
        if(!data[element.language][element.headerContent]) data[element.language][element.headerContent] = {};
        data[element.language][element.headerContent][element.idContent] = element; */
        if(!data[element.headerContent]) data[element.headerContent] = {};
        if(!data[element.headerContent][element.idContent]) data[element.headerContent][element.idContent] = {};
        data[element.headerContent][element.idContent][element.language] = element;
    });

    console.log(data);

    return <AdminSection>
        {Object.keys(data).map(ns => (
            <AdminDropDown title={ns}>
                {Object.keys(data[ns]).map(elem => (
                    <AdminDropDown title={elem}>
                        <ContentEdit data={data[ns][elem]} />
                    </AdminDropDown>
                ))}
            </AdminDropDown>
        ))}
    </AdminSection>
}