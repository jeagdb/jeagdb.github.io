import styled from 'styled-components'
import { useState, useCallback } from 'react'
import { get, isEqual, map, capitalize, isEmpty } from 'lodash'

import media from '@/services/media'
import HomeButton from '../components/HomeButton'
import SpriteSlice from '../components/SpriteSlice'
import GlobalStyles from '../components/GlobalStyles'
import SpriteVisualizer from '../components/SpriteVisualizer'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: grey;
  padding: 24px;
  flex-direction: column;

  ${media.lessThan('m')`
  `}
`
const Tabs = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
  margin-top: 24px;
  width: 100%;
  border: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  
`
const Tab = styled.div`
  border: ${({ selected }) => selected ? '2px' : '1px'} solid white;
  border-bottom: none;
  border-top-left-radius: 10px 10px;
  padding: 8px;
  font-weight: ${({ selected }) => selected ? '600' : '400'};
`
const TABS = ['sélection', 'animation']

const SpriteSlicer = () => {
  const [width, updateWidth] = useState(80)
  const [height, updateHeight] = useState(80)
  const [sprites, updateSprites] = useState({})
  const [selected, updateSelected] = useState(TABS[0])

  const handleClick = useCallback((key) => updateSelected(key), [updateSelected])

  return (
    <>
      <GlobalStyles />
      <Container>
        <HomeButton />
        <Tabs>
          {map(TABS, tab => {
            return (
              <Tab selected={isEqual(tab, selected)} onClick={() => handleClick(tab)}>
                {capitalize(tab)}
              </Tab>
            )
          })}
        </Tabs>
        {isEqual(selected, 'sélection') &&
          <SpriteSlice
            width={width}
            height={height}
            sprites={sprites}
            updateWidth={updateWidth}
            updateHeight={updateHeight}
            updateSprites={updateSprites} />}
        {isEqual(selected, 'animation') &&
          <SpriteVisualizer
            sprites={sprites} />}
      </Container>
    </>
  )
}

export default SpriteSlicer