const { default: styled } = require("styled-components");

export const AdminDropDownTitle = styled.p`
    margin: 0;
    font-size: 18px;

    padding: 10px;

    background: lightblue;
`

export const AdminDropDownDiv = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 6px 0;

    border: 1px solid black;
    border-radius: 5px;

    cursor: pointer;
`

export const AdminDropDownContent = styled.div`
    display: flex;
    flex-direction: column;

    margin: 16px;
`