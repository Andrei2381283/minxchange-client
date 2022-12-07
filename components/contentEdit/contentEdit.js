import React from "react";
import { ContentEditDiv, ContentEditLangDiv, ContentEditLangHeader, ContentEditLangTextarea } from "./styles";

const ContentEdit = ({ data }) => {
    return <ContentEditDiv>
        {
            Object.keys(data).map(v => (
                <ContentEditLangDiv>
                    <ContentEditLangHeader>{v}:</ContentEditLangHeader>
                    <ContentEditLangTextarea>{data[v].textContent}</ContentEditLangTextarea>
                </ContentEditLangDiv>
            ))
        }
    </ContentEditDiv>
}

export default ContentEdit;