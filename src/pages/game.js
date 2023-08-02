import styled from 'styled-components'
import { useState } from 'react'
import { get, isEmpty } from 'lodash'

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
        {!isEmpty(get(sprites, 'selectedSprites', [])) &&
          <SpriteVisualizer
            sprites={sprites} />}
      </Container>
    </>
  )
}

export default Game