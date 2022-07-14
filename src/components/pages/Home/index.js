import styled from 'styled-components'
import { useState } from 'react'

import Tree from '../../organisms/Tree'
import files from '../../../content'
import Background from '../../organisms/Background'
import Visualizer from '../../organisms/Visualizer'

const Notes = styled.div`
  width: 100%;
  padding: 24px 10% 24px 0;
  height: 100%;
  display: flex;
`

const Home = () => {
  const [selected, updateSelected] = useState('')

  return (
    <>
      <Background />
      <Notes>
        <Tree
          tree={files}
          update={updateSelected} />
        <Visualizer
          selected={selected}
          update={updateSelected} />
      </Notes>
    </>
  )
}

export default Home
