import reset from 'styled-reset'
import { get } from 'lodash'
import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const Style = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  html {
    height: 100%;
    margin: 0;
  }

  body {
    height: 100%;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    background-image: ${get(theme, 'black', '#fff')};
    color: ${get(theme, 'white', '#fff')};

    *::-webkit-scrollbar {
      width: 4px;
    }

    *::-webkit-scrollbar-thumb {
      background: white;
      transition: .5s;
    }
  }
`

export default Style
