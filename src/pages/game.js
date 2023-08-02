import styled from 'styled-components'
import { isEqual } from 'lodash'
import { useState, useCallback } from 'react'

import SpriteSlice from '../components/SpriteSlice'
import GlobalStyles from '../components/GlobalStyles'
import SpriteVisualizer from '@/components/SpriteVisualizer'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: grey;
  padding: 24px;
`

const Game = () => {
  const [sprites, updateSprites] = useState({})

  return (
    <>
      <GlobalStyles />
      <Container>
        <SpriteSlice
          sprites={sprites}
          updateSprites={updateSprites} />
        <SpriteVisualizer
          sprites={sprites} />
      </Container>
    </>
  )
}

export default Game