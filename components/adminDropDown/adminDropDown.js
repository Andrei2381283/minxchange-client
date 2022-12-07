import React, { useState } from "react";
import { AdminDropDownContent, AdminDropDownDiv, AdminDropDownTitle } from "./styles";

const AdminDropDown = ({ title, children }) => {

    const [isOpen, setOpen] = useState(false);

    return <AdminDropDownDiv>
        <AdminDropDownTitle onClick={() => setOpen(!isOpen)}>{title}</AdminDropDownTitle>
        {isOpen && <AdminDropDownContent>
            {children}
        </AdminDropDownContent> || ""}
    </AdminDropDownDiv>
}

export default AdminDropDown;