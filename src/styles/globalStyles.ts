import { createGlobalStyle } from 'styled-components';
import FontRegular from '@assets/fonts/Poppins-Regular.ttf';
import FontMedium from '@assets/fonts/Poppins-Medium.ttf';
import FontExtraBold from '@assets/fonts/Poppins-ExtraBold.ttf';
import FontBold from '@assets/fonts/Poppins-Bold.ttf';
import { desktop } from './breakpoints';

const reset = `
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, 
    big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, 
    center, dl, dt, dd, ol, ul, li, form, label, caption, table, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        scroll-behavior: smooth;
    img {
        border: 0;
        vertical-align: middle;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after, q:before, q:after {
        content: "";
    }
    a:focus {
        outline: 0;
        text-decoration: none;
    }
    article, aside, details, figcaption, figure, footer, header, main, nav, section, summary {
        display: block;
    }
    button:focus {
        outline: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        -moz-appearance:textfield;
    }
    @font-face {
        font-family: 'Poppins';
        font-weight: 400;
        src: url(${FontRegular}) format("truetype");
    }
    @font-face {
        font-family: 'Poppins';
        font-weight: 500;
        src: url(${FontMedium}) format("truetype");
    }
    @font-face {
        font-family: 'Poppins';
        font-weight: bold;
        src: url(${FontBold}) format("truetype");
    }
    @font-face {
        font-family: 'Poppins';
        font-weight: 900;
        src: url(${FontExtraBold}) format("truetype");
    } 
`;
export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        /* --text: #D7D0C6; */
        --text: #FFFFFF;
        --subtext: #ffffffa8;
        --dbg: #001B26;
        --lbg: #35A6B6;
        --subbg: #19323C;
        --componentbg: #181818;
        --gbg: #DDE1E4;
        --special: #35A6B6;
        --hover: #7F3F10;
    }
    * {
        box-sizing: border-box;
        transition: background-color .25s ease-out;
        
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
    body > div {
        position: relative;
        overflow-x: hidden;
    }
    *,button,body,input,textarea {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: inherit;
    }
    body {
        background: var(--dbg);
        color: var(--text);
        font-size: 14px;
        ::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    h1, h2, h3, h4 {
        font-weight: 600;
    }
    h1 {
        font-size: 72px;
        /* line-height: 124%; */
    }
    h2 {
        font-size: 60px;
    }
    h3 {
        font-size: 48px;
    }
    h4 {
        font-size: 16px;
    }
    h5 {
        font-size: 24px;
    }
    p {
        font-size: 20px;
    }
    span, p, h3, h4 {
        line-height: 1.5;
    }

    @media ${desktop} {
        h1 {
            font-size: 52px;
        }
        h2 {
            font-size: 40px;
        }
        h3 {
            font-size: 34px;   
        }
        h5 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }
`;
