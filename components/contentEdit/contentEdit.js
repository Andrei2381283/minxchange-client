import React from "react";
import { ContentEditDiv, ContentEditLangDiv, ContentEditLangHeader, ContentEditLangTextarea } from "./styles";

const ContentEdit = ({ changedItems, data }) => {

    const onChange = (lng) => (event, v2) => {
        const item = data[lng];
        
        if(!changedItems[item._id]) changedItems[item._id] = item;
        changedItems[item._id].textContent = event.target.value;

        //console.log(changedItems);
    }

    return <ContentEditDiv>
        {
            Object.keys(data).map(v => (
                <ContentEditLangDiv key={v}>
                    <ContentEditLangHeader>{v}:</ContentEditLangHeader>
                    <ContentEditLangTextarea onChange={onChange(v)} defaultValue={data[v].textContent} />
                </ContentEditLangDiv>
            ))
        }
    </ContentEditDiv>
}

export default ContentEdit;