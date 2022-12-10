const { default: styled } = require("styled-components");

export const ContentEditDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContentEditLangDiv = styled.div`
    display: flex;
    margin: 6px 0;
`

export const ContentEditLangHeader = styled.span`
    font-size: 17px;
    font-weight: 500;
`

export const ContentEditLangTextarea = styled.textarea`
    margin-left: 16px;

    width: 100%;
`