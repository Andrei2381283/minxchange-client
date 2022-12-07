import axios from "axios";

const server = "http://185.200.190.49:5000";


export const getContent = async (lang) => {

    const res = await axios.get(server + "/api/users/get-content/" + lang);

    return res.data;

}