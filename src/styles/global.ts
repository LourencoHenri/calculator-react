import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --equal-color: #000;
        --font-color: #fff;
        --menu-title: #bebebe;
        --menu-text: #e4e4e4;
        --menu-hover-background: #3a3a3a; 
        --menu-active-background: #3a3a3a; 
        --menu-background: #2d2d2d;
        --background-color: #202020;
        --operator-key-background: #323232;
        --operator-key-hover: #3b3b3b;
        --operator-key-active: #323232;
        --number-key-background: #3b3b3b;
        --number-key-hover: #323232;
        --number-key-active: #282828;
        --equal-background: #4cc2ff;
        --equal-hover: #47b1e8;
        --equal-active: #42a1d2;  
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    body {
        background: var(--menu-active-background);
        -webkit-font-smoothing: antialiased;
    }
`