import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
    }
`

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`

export default GlobalStyle