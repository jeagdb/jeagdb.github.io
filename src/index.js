import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import Style from './config/style'
import theme from './config/theme'
import Router from './config/router'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Style />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
)
