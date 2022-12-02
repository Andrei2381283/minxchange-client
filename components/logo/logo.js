import Image from 'next/image';
import React from 'react';
import logo from "../../assets/logo.svg";
import { LogoContainer, LogoContainerL, LogoText } from './styles';

const Logo = ({ isLink, style }) => {

    const LogoContainer_ = isLink ? LogoContainerL : LogoContainer;
    
    return <LogoContainer_ style={style || {}} href="/">
        <Image src={logo} alt="Logo" />
        <LogoText>Mintxchange</LogoText>
    </LogoContainer_>
}

export default Logo;