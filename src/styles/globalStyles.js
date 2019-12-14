import { createGlobalStyle } from 'styled-components'

const background = '#17161C'
const text1 = '#5588F5'
const text2 = '#50A8F5'
const text3 = '#D5E1EF'
const activeLink = '#F6676D'
const link = '#8AEAFF'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,600|Muli:400,700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0 80px;
    background-color: ${background};
  }

  h1 {
    font-family: Muli;
    font-size: 60px;
    font-weight: 700;
    color: ${text1};
    letter-spacing: 0.02em;
    /* line-height: 0.075em; */
  }

  h2 {
    font-family: 'IBM Plex Mono';
    font-size: 50px;
    font-weight: 600;
    color: ${text1}
  }

  h3 {
    font-family: 'IBM Plex Mono';
    font-size: 28px;
    font-weight: 600;
    color: ${text1}
  }

  h4 {
    font-family: 'IBM Plex Mono';
    font-size: 20px;
    font-weight: 500;
    color: ${text2}
  }

  p {
    font-family: Muli;
    font-size: 20px;
    font-weight: 400;
    color: ${text3};
    letter-spacing: 0.02em;
  }

  button {
    font-family: 'IBM Plex Mono';
    font-size: 20px;
    font-weight: 500;
    color: ${link};
    border: 3px solid ${link};
    padding: 8.5px 20px;
    background-color: inherit;
    transition: all 0.2s;

    &:hover {
      background-color: ${link};
      color: ${background};
    }
  }

  a {
    font-family: 'IBM Plex Mono';
    font-size: 22px;
    font-weight: 500;
    color: ${link};
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      color: ${activeLink}
    }
  }
`
