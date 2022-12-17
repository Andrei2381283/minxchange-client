import Image from "next/image";
import React, { useState } from "react";
import { WithdrawChangeImgLabel } from "./styles";

const WithdrawChangeImg = ({ defaultImg, onNewImg = () => {} }) => {

    const [ img, setImg ] = useState(defaultImg);

    const onFile = (event) => {
        if(!event.target.files[0]) return;
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
          //console.log(event.target.result);
          setImg(event.target.result);
          onNewImg(event.target.result);
        });
        reader.readAsDataURL(event.target.files[0]);
        //console.log(event.target.files);
    }

    return <WithdrawChangeImgLabel>
        <Image width="24" height="24" src={img} alt="" />
        <input onChange={onFile} style={{ display: "none" }} type="file" />
    </WithdrawChangeImgLabel>
}

export default WithdrawChangeImg;