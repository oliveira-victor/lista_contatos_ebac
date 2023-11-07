import styled from "styled-components";
import variables from "../../styles/variables";

export const MenuContainer = styled.menu`
    margin-top: 20px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    align-items: center;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    h1 {
        color: ${variables.mainColor};
    }
`

export const AddBtn = styled.button`
cursor: pointer;
    background-color: ${variables.mainColor};
    color: #fff;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-size: 30px;
    font-weight: bold;
`