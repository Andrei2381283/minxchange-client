const { default: styled } = require("styled-components");

export const AdminDropDownTitle = styled.p`
    margin: 0;
    font-size: 18px;

    border: none;
    outline: none;
    background: transparent;
`

export const AdminDropDownHeaderDiv = styled.div`
    display: flex;

    padding: 10px;

    /* background: lightblue; */
    border-radius: 3px;
`

export const AdminDropDownDiv = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 6px 0;

    border: 1px solid lightgray;
    border-radius: 3px;

    cursor: pointer;
`

export const AdminDropDownContent = styled.div`
    display: flex;
    flex-direction: column;

    margin: 16px;
`