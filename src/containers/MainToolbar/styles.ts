import styled from "styled-components";
import variables from "../../styles/variables";

export const MenuContainer = styled.menu`
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 30px;
    align-items: center;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    h1 {
        color: ${variables.mainColor};
    }

    @media (max-width: 767px) {
        width: 94%;
        margin: 0 auto;

        form {
            margin-top: 30px;
            text-align: center;
        }
    }
`

export const upperPart = styled.div`
    display: flex;
    justify-content: space-between;
`

export const addContactInput = styled.input`
    padding: 6px;
    width: 200px;
    margin-right: 10px;
    border: none;
    border-bottom: 2px solid ${variables.mainColor};
    font-size: 16px;

    &:focus {
        outline: none;
    }

    @media (max-width: 767px) {
        margin-bottom: 10px;
    }
`

export const AddBtn = styled.button`
    cursor: pointer;
    background-color: ${variables.mainColor};
    color: #fff;
    border: none;
    padding: 10px 16px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
`

export const NewContactBtn = styled(AddBtn)`
    background-color: ${variables.green};
`