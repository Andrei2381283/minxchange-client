import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTheme } from "../../theme/theme";
import { login } from "../../utils/api";
import { useTranslation } from "../../utils/translate";
import GreenBtn from "../greenBtn/greenBtn";
import { LoginPopupContainer, LoginPopupDiv, LoginPopupInput } from "./styles";

const LoginPopup = ({ loginOpen, showLogin }) => {

    const router = useRouter();

    const [data, setData] = useState({email: "", password: ""});

    const { theme } = useTheme();
    const { t } = useTranslation();

    const submit = async () => {
        const res = await login(data);
        if(res.token){
            document.cookie = "token=" + res.token + "; path=/";
            router.push("/admin");
        }
    }

    return loginOpen ? <LoginPopupContainer onClick={(event) => event.nativeEvent.path.length == 6 && showLogin(false)}>
        <LoginPopupDiv theme={theme}>
            <LoginPopupInput onChange={({ target }) => setData({...data, email: target.value})} placeholder="email" />
            <LoginPopupInput onChange={({ target }) => setData({...data, password: target.value })} placeholder="password" />
            <GreenBtn onClick={submit} small style={{marginTop: "1rem"}}>{t("login")}</GreenBtn>
        </LoginPopupDiv>
    </LoginPopupContainer> : ""
}

export default LoginPopup;