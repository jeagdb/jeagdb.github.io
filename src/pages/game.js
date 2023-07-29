import styled from 'styled-components'
import { isEqual } from 'lodash'
import { useState, useCallback } from 'react'

import SpriteSlice from '../components/SpriteSlice'
import GlobalStyles from '../components/GlobalStyles'
import SpriteVisualizer from '@/components/SpriteVisualizer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: grey;
  padding: 24px;
`
const Tabs = styled.div`
  display: flex;
  gap: 24px;
`
const Tab = styled.div`
  cursor: pointer;
`

const Game = () => {
  const [sprites, updateSprites] = useState({})
  const [tab, updateTab] = useState('slice')

  const handleTab = useCallback((tab) => {
    updateTab(tab)
  }, [updateTab])

  return (
    <>
      <GlobalStyles />
      <Container>
        <Tabs>
          <Tab onClick={() => handleTab('slice')}>Découpe de spritesheet</Tab>
          <Tab onClick={() => handleTab('visualizer')}>Lecture des sprites</Tab>
        </Tabs>
        {isEqual(tab, 'slice') && <SpriteSlice
          sprites={sprites}
          updateSprites={updateSprites} />}
        {isEqual(tab, 'visualizer') &&
          <SpriteVisualizer
            sprites={sprites} />}
      </Container>
    </>
  )
}

export default Game