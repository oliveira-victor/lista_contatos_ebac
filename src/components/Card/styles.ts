import styled from "styled-components";
import variables from "../../styles/variables";

export const CardContainer = styled.div`
    background-color: #fff;
    min-width: 350px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    @media (max-width: 767px) {
        margin: 0 auto;
    }
`

export const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${variables.mainColor};

    span {
        font-size: 26px;
        cursor: pointer;
    }
`

export const UserInfo = styled.span`
    font-size: 20px;
    font-weight: bold;
`

export const TypeField = styled.textarea`
    display: block;
    width: 100%;
    height: 30px;
    font-size: 16px;
    resize: none;
    border: none;
    background-color: transparent;
`

export const EditCardBtn = styled.button`
    width: 100%;
    background-color: ${variables.mainColor};
    color: #fff;
    font-size: 20px;
    padding: 4px 0;
    margin-top: 16px;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    cursor: pointer;
`

export const EditingBtnsContainer = styled.div`
    display: flex;
    gap: 6px;
    justify-content: space-between;
`

export const IsEditingBtn = styled(EditCardBtn)`
    width: 48%;
    font-weight: bold;
`