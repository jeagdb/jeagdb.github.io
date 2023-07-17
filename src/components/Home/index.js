import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import original from 'react95/dist/themes/original'
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'
import { get, map, first } from 'lodash'
import { ThemeProvider } from 'styled-components'

import Shortcut from '../Shortcut'
import BottomBar from '../BottomBar'
import GlobalStyles from '../GlobalStyles'
import { SHORTCUT_LINKS } from '../../config/links'

const Background = styled.div`
  background-image: url('/images/background.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
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
      <Background>
        <Shortcuts>
          {map(SHORTCUT_LINKS, col => (
            <Columns key={get(first(col), 'link', '')}>
              {map(col, ({ icon, link, text }) => (
                <div key={link}>
                  <Link href={link}>
                    <Shortcut>
                      <img
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
      </Background>
    </ThemeProvider>
  )
}

export default Home