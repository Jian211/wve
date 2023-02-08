import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    :root {
        --box-shadow : rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
        --box-border-radius: 20px;
        --margin-side : 0 12% ;
    }
`;