import Image from 'next/image';
import React from 'react';
import logo from "../../assets/logo.png";
import { LogoContainer, LogoText } from './styles';

const Logo = () => {

    return <LogoContainer>
        <Image src={logo} alt="Logo" />
        <LogoText>Mintxchange</LogoText>
    </LogoContainer>
}

export default Logo;