import styled from "styled-components";


export const AddCurrencyContainer = styled.div`
    margin-top: 2rem;
    position: relative;

    display: flex;
    justify-content: center;
`

export const AddCurrencyButton = styled.button`
    background: transparent;
    border: 1px solid lightgray;
    border-radius: 3px;

    /* padding: 15px; */

    font-size: 3rem;
    font-family: 'Gilroy';
    color: #38E7BA;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 66px;
    height: 44px;

    margin: 0 auto;
`

export const AddCurrencySelect = styled.div`
    position: absolute;
    //padding: 8px;
    margin-top: -10px;
    width: 100%;

    border: 1px solid lightgray;
    background: white;

    transform: translateY(-100%);
`