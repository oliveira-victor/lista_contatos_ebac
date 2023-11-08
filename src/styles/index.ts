import styled, { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
        list-style: none;
    }

    body {
        background-color: ${variables.mainColor};
    }
`

export const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`

export default GlobalStyle