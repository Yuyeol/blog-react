import { createGlobalStyle } from "styled-components";
import { PINK } from "styles";

const GlobalStyles = createGlobalStyle`
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        padding:0;
        margin:0;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: rgb(16, 24, 32);
        background-color:${PINK}
    }
`;

export default GlobalStyles;
