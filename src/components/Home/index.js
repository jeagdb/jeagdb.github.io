import Link from 'next/link'
import Image from 'next/image'
import styled, { css, keyframes } from "styled-components"
import original from 'react95/dist/themes/original'
import { ThemeProvider } from 'styled-components'
import { get, map, first } from 'lodash'

import Shortcut from '../Shortcut'
import BottomBar from '../BottomBar'
import GlobalStyles from '../GlobalStyles'
import { SHORTCUT_LINKS } from '../../config/links'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const Background = styled(Image)`
  z-index: -1;
  background-size: cover;
  background-position: center;

  transition: opacity 2s;
  animation: ${fadeIn} 2s;
`

const Shortcuts = styled.div`
  display: flex;
  gap: 54px;
  padding: 32px;
  max-width: fit-content;
`
const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Home = () => {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <Background
        src='images/background.jpg'
        alt='desktop wallpaper'
        fill={true} />
      <Shortcuts>
        {map(SHORTCUT_LINKS, col => (
          <Columns key={get(first(col), 'link', '')}>
            {map(col, ({ icon, link, text }) => (
              <div key={link}>
                <Link href={link}>
                  <Shortcut>
                    <Image
                      src={icon}
                      alt={text}
                      width={32}
                      height={32} />
                    <div>{text}</div>
                  </Shortcut>
                </Link>
              </div>))}
          </Columns>))}
      </Shortcuts>
      <BottomBar />
    </ThemeProvider>
  )
}

export default Home