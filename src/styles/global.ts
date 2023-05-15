import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    &:focus{
        outline: none;
    }

    input:focus{
        border: 1px solid ${(props) => props.theme.yellowDark};
    }

    body {
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.baseText};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif
    }

`;
