import React, { useEffect, useState } from "react";
import cookie from "cookie";
import AdminDropDown from "../components/adminDropDown/adminDropDown";
import ContentEdit from "../components/contentEdit/contentEdit";
import WithdrawBlock from "../components/withdrawBlock/withdrawBlock";
import { AdminBack, AdminSave, AdminSection } from "../styles/admin";
import { getContent, saveContentItem, verifyToken } from "../utils/api";
import { GlobalStyle } from "../styles/globals";
import { themes } from "../theme/theme";
import { useRouter } from "next/router";


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


const trData = {
    common: "Разное",
    footer: "Нижний колонтитул",
    funds: "Страница \"Ввод вывод средств\"",
    header: "Верхний колонтитул",
    index: "Главная страница",
    cookie: "Страница \"Политика использования cookie\"",
    policy: "Страница \"Политика конфиденциальности\"",
    terms: "Страница \"Пользовательское соглашение\"",
    use: "Страница \"Условия использования\""
}

export default function Admin(props) {
    //console.log(cookie.parse(document.cookie));

    //const isVerify = await verifyToken(req.cookies.get('token')?.value || "");

    const router = useRouter();

    const [allowDisplay, setAllowDisplay] = useState(false);

    const [init, setInit] = useState(false);

    const [content, setContent] = useState([]);

    useEffect(() => {
        if(!init) {
            setInit(true);
            (async () => {
                const isVerified = await verifyToken(typeof document == "object" && cookie.parse(document.cookie).token);
                if(!isVerified) router.push("/");
                setAllowDisplay(isVerified)
                setContent(await getContent(""));
            })();
        }
    })

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

    return  allowDisplay && <>
        <GlobalStyle theme={themes.light} />
        <AdminSection>
            <AdminBack href="/">Смотреть Mintxchange</AdminBack>
            {Object.keys(data).map(ns => (
                <AdminDropDown /* changedItems={changedItems} titleField="headerContent" items={Object.keys(data[ns]).map(v => Object.keys(data[ns][v]).map(v2 => data[ns][v][v2])).flat(Infinity)} */ key={ns} title={trData[ns] || ns}>
                    {Object.keys(data[ns]).map(elem => (
                        <AdminDropDown /* changedItems={changedItems} titleField="idContent" items={Object.keys(data[ns][elem]).map(v =>  data[ns][elem][v]).flat(Infinity)} */ key={elem} title={(data[ns][elem].ru?.textContent || "").split(" ").slice(0, 10).join(" ") ||/* trData[elem] ||  */elem}>
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
    </> || ""
}