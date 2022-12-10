import Image from "next/image";
import styled from "styled-components";

export const WithdrawBlockContainer = styled.div`
    display: flex;
    margin-top: 3.5rem;

    @media (max-width: 998px) {
        flex-direction: column;
    }
`
//${props => props.theme == "Light" ? "" : ""}
export const WithdrawBlockDiv = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme == "Light" ? "#FFFFFF" : "linear-gradient(172.25deg, #0C0D1B 2.49%, #0C0D1B 99.24%)"};
    ${props => props.theme == "Light" ? "box-shadow: 18px 15px 21px rgba(149, 168, 182, 0.04);" : ""}
    border-radius: 3px;
    ${props => props.theme == "Light" ? "" : "backdrop-filter: blur(15px);"}
    position: relative;

    &:not(:first-of-type){
        margin-left: 1.25rem;
    }

    @media (max-width: 998px) {
        margin-left: 0 !important;

        &:not(:first-of-type){
            margin-top: 60px;
        }
    }
`

export const WithdrawBlockBtn = styled.button`
    position: relative;
    background: ${props => props.selected ? "#38E7BA" : (props.theme == "Light" ? "#FFFFFF" : "transparent")};
    border: ${props => props.selected ? "1px solid #38E7BA" : (props.theme == "Light" ? "1px solid #ECECF1" : (props => props.small ? "1px solid #38E7BA" : "1px solid rgba(255, 255, 255, 0.07)"))};
    border-radius: 3px;
    padding: ${props => props.small ? "0.5rem" : "1rem"};
    width: 100%;
    font-weight: 500;
    font-size: 1rem;
    margin-top: ${props => props.small ? "0" : "0.25rem"};
    ${props => props.small ? "" : `
    display: flex;
    flex-direction: column;
    `}
    color: ${props => props.selected ? (props.theme == "Light" ? "#FFFFFF" : "#050411") : (props.theme == "Light" ? "#000002" : "#FFFFFF")};
`

export const WithdrawBlockTopDiv = styled.div`
    display: flex;
`

export const WithdrawBlockFirstBlockBtnDiv = styled.div`
    display: flex;
    align-items: center;
`

export const WithdrawBlockText = styled.span`
    font-weight: 500;
    margin-left: 8px;
`

export const WithdrawBlockSubText = styled.span`
    font-weight: 500;
    margin-left: 32px;
    font-size: 0.75rem;
    color: ${props => props.selected ? (props.theme == "Light" ? "#FFFFFF" : "#050411") : (props.theme == "Light" ? "rgba(0, 0, 2, 0.4)" : "rgba(255, 255, 255, 0.4)")};
    margin-top: 4px;
`

export const WithdrawBlockSubTextInput = styled.input`
    font-weight: 500;
    margin-left: 32px;
    font-size: 0.75rem;
    color: ${props => props.selected ? (props.theme == "Light" ? "#FFFFFF" : "#050411") : (props.theme == "Light" ? "rgba(0, 0, 2, 0.4)" : "rgba(255, 255, 255, 0.4)")};
    margin-top: 4px;
    background: transparent;
    padding: 0;
    border: 0.5px solid black;
    outline: none;
`

export const WithdrawBlockRemove = styled(Image)`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 12px;
    height: 12px;
`

export const WithdrawBlockBtn3div = styled.div`
    display: flex;
    align-items: center;
`

export const WithdrawBlockBtn3divdiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const WithdrawBlockExchangeImg = styled(Image)`
    margin: 0 1.5rem;
`

export const WithdrawBlockBtnTime = styled.span`
    font-weight: 500;
    margin-left: 0.5rem;
    color: rgba(0, 0, 2, 0.4);
    font-size: 0.875rem;
`

export const WithdrawBlockDivTitle = styled.span`
    font-size: 1.25rem;
    font-weight: 500;
    position: absolute;
    width: 100%;
    top: -2rem;
    transform: translateY(-100%);
    text-align: center;
    left: 0;
`