const { default: styled } = require("styled-components");

export const AdminSection = styled.section`
    display: flex;
    flex-direction: column;

    margin: 10%;
`

export const AdminSave = styled.button`
    margin: 20px auto 0;
    padding: 0.5em 1em;

    font-size: 18px;

    background: white;
    border-radius: 3px;
    background: #38E7BA;
    border: 1px solid #38E7BA;
    color: white;

    transition: 0.2s;

    &:hover {
        background: white;
        color: black;
    }
`