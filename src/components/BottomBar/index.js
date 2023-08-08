import React, { useCallback, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { map, filter, isEqual, isUndefined, includes } from 'lodash'
import { AppBar, Toolbar, Button, Frame, MenuList, MenuListItem, Separator } from 'react95'

import media from '@/services/media'
import Window95 from '../Window'
import { BOTTOM_BAR_LINKS } from '../../config/links'

const StartButton = styled(Button)`
  display: flex;
  gap: 4px;
  &:hover {
    text-decoration: none;
  }
`
const Bar = styled(AppBar)`
  bottom: 0;
  top: auto;
`
const BarElements = styled(Toolbar)`
  justify-content: space-between;
`
const Clock = styled(Frame)`
  padding: 6px;
`
const Menu = styled(MenuList)`
  position: absolute;
  bottom: 30px;
  cursor: pointer;
`
const MenuItem = styled(MenuListItem)`
  display; flex;
  justify-content: left;
  cursor: pointer;
  gap: 6px;
`
const MenuText = styled.div`
  font-size: 14px;
`
const ShutdownAnimation = keyframes`
  0% {
    opacity: 0;
    cursor: wait;
  }
  100% {
    opacity: 1;
    cursor: wait;
    background: black;
  }
`
const fadeInOut = keyframes`
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
`
const ShutdownOverlay = createGlobalStyle`
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background: black;
    animation: ${ShutdownAnimation} 3s forwards;
  }
`
const VideoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 40%;
`
const VideoComponent = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 10000;
  object-fit: cover;
`
const VideoText = styled.p`
  z-index: 10001;
  color: white;
  font-size: 54px;
  position: absolute;
  animation: ${fadeInOut} 2s infinite;
  bottom: 10%;
  text-align: center;
  text-shadow: 3px 2px darkblue;

  ${media.lessThan('m')`
    font-size: 42px;
  `} 
`
const Applications = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
const StyledWindow95 = styled(Window95)`

`

const formatTime = (time) => time < 10 ? `0${time}` : time

const getVideoName = (date) => {
  const isHalloween = date.getMonth() === 9 && date.getDate() === 31
  return isHalloween ? 'creepycomputer' : 'computer1'
}

const BottomBar = ({ windows, updateWindows }) => {
  const [now, updateNow] = useState(new Date())
  const [open, updateOpen] = useState(false)
  const [shutdown, updateShutdown] = useState(false)
  const [bootVideo, updateBootVideo] = useState(false)
  const [applications, updateApplications] = useState(windows)
  const audioRef = useRef()

  const handleOpen = useCallback(() => updateOpen(!open), [open])
  const handleOpenApplication = useCallback((application) => {
    console.log('?')
    const res = includes(applications, application)
      ? filter(applications, app => !isEqual(app, application))
      : [...applications, application]

    console.log(res)
    updateApplications(res)
  }, [applications, updateApplications])

  const handleShutDown = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play()
      updateShutdown(true)

      setTimeout(() => {
        updateBootVideo(true)
      }, 3000)
    }
  }, [audioRef, updateShutdown])

  const handleVideoClick = useCallback(() => {
    updateBootVideo(false)
    updateShutdown(false)
  }, [updateBootVideo])

  const handleCloseWindow = useCallback((title) => {
    updateWindows(prevWindows => {
      return filter(prevWindows, prevWindow => !isEqual(title, prevWindow))
    })
  }, [updateWindows])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
    }

    const timer = setInterval(() => updateNow(new Date()), 30000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (bootVideo) {
      document.body.addEventListener('click', updateBootVideo)
      return () => document.body.removeEventListener('click', updateBootVideo)
    }
  }, [bootVideo, updateBootVideo])

  return (
    <>
      {shutdown && <ShutdownOverlay />}
      {bootVideo && <VideoContainer>
        <VideoComponent onClick={handleVideoClick} src={`/videos/${getVideoName(now)}.mp4`} autoPlay loop muted />
        <VideoText>Click anywhere !</VideoText>
      </VideoContainer>}
      <Bar>
        <BarElements>
          <Applications>
            <StartButton
              active={open}
              onClick={handleOpen}>
              <Image
                src='/images/windows.png'
                alt='w95 logo'
                width={24}
                height={24} />
              <div>Start</div>
            </StartButton>
            {open &&
              <Menu>{map(BOTTOM_BAR_LINKS, ({ icon, link, text, divider, width = 32, height = 32 }) => {
                if (isUndefined(link)) {
                  return (
                    <>
                      {isEqual(divider, true) && <Separator />}
                      <MenuItem onClick={handleShutDown}>
                        <Image
                          src={icon}
                          alt={text}
                          width={width}
                          height={height} />
                        <MenuText>{text}</MenuText>
                        <audio ref={audioRef} src="/mp3/shutdown.mp3" />
                      </MenuItem>
                    </>)
                }

                return (
                  <a href={link} target='_blank' rel="noreferrer">
                    {isEqual(divider, true) && <Separator />}
                    <MenuItem>
                      <Image
                        src={icon}
                        alt={text}
                        width={width}
                        height={height} />
                      <MenuText>{text}</MenuText>
                    </MenuItem>
                  </a>
                )
              })}
              </Menu>}
            {map(windows, window => {
              return (
                <Button
                  active={includes(applications, window)}
                  onClick={() => handleOpenApplication(window)}>
                  {window}
                </Button>
              )
            })}
          </Applications>
          <Clock variant='well'>
            {formatTime(now.getHours())}:{formatTime(now.getMinutes())}
          </Clock>
        </BarElements>
      </Bar>
    </>
  )
}

export default BottomBar