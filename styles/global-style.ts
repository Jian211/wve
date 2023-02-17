import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Zen+Old+Mincho:wght@400;500;600;700;900&display=swap');
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
        font-family: 'Zen Old Mincho', serif;
        font-family: 'Gowun Dodum', serif;
    }
`;