import Link from 'next/link'
import Image from 'next/image'
import styled, { keyframes } from "styled-components"
import original from 'react95/dist/themes/original'
import { ThemeProvider } from 'styled-components'
import { useState, useCallback } from 'react'
import { get, map, first, filter, isEqual, some, isUndefined } from 'lodash'

import Window95 from '../Window'
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
  const [windows, updateWindows] = useState([])

  const handleClick = useCallback((title, component) => {
    if (!some(windows, window => isEqual(get(window, 'title'), title))) {
      updateWindows([...windows, {
        title,
        visible: true,
        Component: component
      }])
    }
  }, [windows, updateWindows])

  const handleCloseWindow = useCallback((title) => {
    updateWindows(prevWindows => {
      return filter(prevWindows, prevWindow => !isEqual(title, get(prevWindow, 'title')))
    })
  }, [updateWindows])

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <Background
        src='images/background.jpg'
        alt='desktop wallpaper'
        fill={true} />
      <Shortcuts>
        {map(SHORTCUT_LINKS, col => (
          <Columns key={get(first(col), 'icon', '')}>
            {map(col, ({ icon, link, text, component }) => {
              console.log('icon ', icon)
              if (isUndefined(link)) {
                return (
                  <Shortcut onClick={() => handleClick(text, component)}>
                    <Image
                      src={icon}
                      alt={text}
                      width={32}
                      height={32} />
                    <div>{text}</div>
                  </Shortcut>
                )
              }

              return (
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
                </div>)
            })}
          </Columns>))}
      </Shortcuts>
      {map(windows, ({ title, visible, Component }) => {
        if (visible) {
          return (
            <Window95
              key={title}
              title={title}
              onClose={handleCloseWindow}>
              <Component />
            </Window95>
          )
        }
      })}
      <BottomBar
        windows={windows}
        updateWindows={updateWindows} />
    </ThemeProvider>
  )
}

export default Home