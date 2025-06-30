import { createGlobalStyle } from "styled-components";

//estilos globais
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }


    h1 {
        font-size: 2rem;
        font-family: "Baloo 2", serif;
        font-weight: 800;
        color: #403937;
    }

    h2 {
        font-size: 1.4rem;
        font-family: "Baloo 2", serif;
        font-weight: 700;
        color: #403937;
    }
`