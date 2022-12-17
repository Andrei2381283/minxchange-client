import styled from "styled-components";

export const WithdrawListContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    position: relative;

    user-select: none;
`

export const WithdrawListSelected = styled.div`
    width: 100%;
    padding: 1rem 1.5rem;

    display: flex;
    align-items: center;
    
    background: ${props => props.selected ? "#38E7BA" : (props.theme == "Light" ? "#FFFFFF" : "transparent")};
    border: ${props => props.selected ? "1px solid #38E7BA" : (props.theme == "Light" ? "1px solid #ECECF1" : "1px solid rgba(255, 255, 255, 0.07)")};
    border-radius: 3px;
    ${props => props.isOpen ? `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    ` : ""}

    margin-top: 2rem;
`

export const WithdrawListSelectedTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 1.25rem;
`

export const WithdrawListSelectedTitleInput = styled.input`
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 1.25rem;
    background: transparent;
    border: 0;
    outline: none;
    border-bottom: 1px solid black;
`

export const WithdrawListItemsDiv = styled.div`
    position: absolute;

    top: 100%;
    left: 0;
    width: 100%;

    @keyframes opacityTo0 {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    ${props => props.isOpen == "hide" ? `
        animation: 0.4s 1 alternate opacityTo0;
    ` : ""}

    background: ${props => props.theme == "Light" ? "#FFFFFF" : "linear-gradient(172.25deg, #0C0D1B 2.49%, #0C0D1B 99.24%)"};
    border: ${props => props.theme == "Light" ? "1px solid #ECECF1" : "1px solid rgba(255, 255, 255, 0.07)"};
    border-radius: 0 0 3px 3px;
`

export const WithdrawListItem = styled.div`
    display: flex;
    align-items: center;
    
    position: relative;

    padding: 0.75rem 1.5rem;
`

export const WithdrawListAdd = styled.button`
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
    height: 30px;

    margin: 1rem auto 0.25rem;
`

export const WithdrawListSelect = styled.div`
    position: absolute;
    //padding: 8px;
    //margin-top: -10px;
    width: 100%;
    left: 0;

    z-index: 1;

    border: 1px solid lightgray;
    background: white;

    transform: translateY(-100%);
`