import React, { useState } from "react";
import { AdminDropDownContent, AdminDropDownDiv, AdminDropDownHeaderDiv, AdminDropDownTitle } from "./styles";

const AdminDropDown = ({ changedItems, items, titleField, title, children }) => {
    //console.log(changedItems);

    /* const onChange = (event, v2) => {
        items.forEach((v) => {
            if(!changedItems[v._id]) changedItems[v._id] = v;
            changedItems[v._id][titleField] = event.target.value;
        });

        console.log(changedItems);
    } */

    const [isOpen, setOpen] = useState(false);

    return <AdminDropDownDiv>
        <AdminDropDownHeaderDiv onClick={() => setOpen(!isOpen)}>
            {/* <AdminDropDownTitle onChange={onChange} defaultValue={title}/> */}
            <AdminDropDownTitle>{title}</AdminDropDownTitle>
        </AdminDropDownHeaderDiv>
        {isOpen && <AdminDropDownContent>
            {children}
        </AdminDropDownContent> || ""}
    </AdminDropDownDiv>
}

export default AdminDropDown;