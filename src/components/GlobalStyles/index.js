import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  #__next {
    height: 100%;
    width: 100%;
  }

  html {
    height: 100%;
    margin: 0;
  }

  body {
    margin: 0;
    height: 100%;
    color: white;
    font-family: 'Roboto', sans-serif;
    background-image: black;

    *::-webkit-scrollbar {
      width: 4px;
    }

    *::-webkit-scrollbar-thumb {
      background: white;
      transition: .5s;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }

  img {
    max-width: 100%;
  }

  pre {
    background: grey;
    padding: 2px 4px;
    border-radius: 10px;
  }

  code {
    background: grey;
    padding: 0px 4px;
    border-radius: 10px;
    white-space: pre-wrap;
  }
`

export default GlobalStyles