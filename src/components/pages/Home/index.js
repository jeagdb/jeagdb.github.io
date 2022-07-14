import { useState } from 'react'

import Tree from '../../organisms/Tree'
import files from '../../../content'
import Background from '../../organisms/Background'
// import Visualizer from '../../organisms/Visualizer'

const Home = () => {
  const [selected, updateSelected] = useState('')

  return (
    <>
      <Background />
      <p>{selected}</p>
      <Tree
        tree={files}
        update={updateSelected} />
      {/* <Visualizer
        selected={selected}
        update={updateSelected} /> */}
    </>
  )
}

export default Home
