import axios from "axios";
import cookie from "cookie";

const server = /* "http://localhost:5000"; */"http://185.200.190.49:5000";


export const getContent = async (lang) => {

    const res = await axios.get(server + "/api/users/get-content/" + lang);

    return res.data;

}

export const verifyToken = async (token) => {

    const res = await axios.get(server + "/api/auth/verify", { headers: { "x-auth-token": token || (document && cookie.parse(document.cookie).token) } });

    return res.status == 200;

}

export const login = async (data) => {

    const res = await axios.post(server + "/api/auth/login", data);

    return res.data;

}

export const saveContentItem = async (item) => {

    if(Array.isArray(item)){
        for(const item_ of item){
            await saveContentItem(item_);
        }
        return;
    }

    return await axios.put(server + "/api/users/update-content/" + item._id, item, { headers: { "x-auth-token": document && cookie.parse(document.cookie).token } });

}

export const getCurrencies = async () => {

    const res = await axios.get(server + "/api/currency");

    return res.data;

}

export const getCurrenciesList1 = async () => {

    const res = await axios.get(server + "/api/currency/list1");

    return res.data;

}

export const getCurrenciesList2 = async () => {

    const res = await axios.get(server + "/api/currency/list2");

    return res.data;

}

export const addCurrenciesList1 = async (items) => {

    if(!Array.isArray(items)) items = [items];

    const res = await axios.post(server + "/api/currency/list1", items, { headers: { "x-auth-token": document && cookie.parse(document.cookie).token } });

    return res.data;

}

export const addCurrenciesList2 = async (items) => {

    if(!Array.isArray(items)) items = [items];

    const res = await axios.post(server + "/api/currency/list2", items, { headers: { "x-auth-token": document && cookie.parse(document.cookie).token } });

    return res.data;

}

export const updateCurrenciesList1 = async (items) => {

    if(!Array.isArray(items)) items = [items];

    const res = await axios.put(server + "/api/currency/list1", items, { headers: { "x-auth-token": document && cookie.parse(document.cookie).token } });

    return res.data;

}

export const updateCurrenciesList2 = async (items) => {

    if(!Array.isArray(items)) items = [items];

    const res = await axios.put(server + "/api/currency/list2", items, { headers: { "x-auth-token": document && cookie.parse(document.cookie).token } });

    return res.data;

}

export const removeCurrenciesList1 = async (items) => {

    if(!Array.isArray(items)) items = [items];

    const res = await axios.delete(server + "/api/currency/list1", {data: items, headers: { "x-auth-token": document && cookie.parse(document.cookie).token }});

    return res.data;

}

export const removeCurrenciesList2 = async (items) => {

    if(!Array.isArray(items)) items = [items];

    const res = await axios.delete(server + "/api/currency/list2", {data: items, headers: { "x-auth-token": document && cookie.parse(document.cookie).token }});

    return res.data;

}