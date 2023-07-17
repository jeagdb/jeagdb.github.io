import React, { useCallback, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { map, isEqual, isUndefined } from 'lodash'
import { AppBar, Toolbar, Button, Frame, MenuList, MenuListItem, Separator } from 'react95'

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

const formatTime = (time) => time < 10 ? `0${time}` : time

const BottomBar = () => {
  const [now, updateNow] = useState(new Date())
  const [open, updateOpen] = useState(false)

  const handleOpen = useCallback(() => updateOpen(!open), [open])

  useEffect(() => {
    const timer = setInterval(() => updateNow(new Date()), 30000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Bar>
      <BarElements>
        <StartButton
          active={open}
          onClick={handleOpen}>
          <img
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
                  <MenuItem>
                    <img
                      src={icon}
                      alt={text}
                      width={width}
                      height={height} />
                    <MenuText>{text}</MenuText>
                  </MenuItem>
                </>)
            }

            return (
              <a href={link} target='_blank' rel="noreferrer">
                {isEqual(divider, true) && <Separator />}
                <MenuItem>
                  <img
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
        <Clock variant='well'>
          {formatTime(now.getHours())}:{formatTime(now.getMinutes())}
        </Clock>
      </BarElements>
    </Bar>
  )
}

export default BottomBar