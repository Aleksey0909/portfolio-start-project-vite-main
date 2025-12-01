import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        min-width: 375px;
        margin: 0;
        font-family: 'Popins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
    }

    a {
        text-decoration: none;
        color: inherit;

        ul, ol {
            list-style: none;
        }
    }

    li::marker {
        content: "";
        cursor: pointer;
    }


    button {
        background: unset;
        border: unset;
    }

    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
        
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
       
    }
    


`