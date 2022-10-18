import styled from 'styled-components'
import { isEmpty } from 'lodash'
import { useState } from 'react'

import Tree from '../../organisms/Tree'
import files from '../../../content'
import Visualizer from '../../organisms/MdVisualizer'
import AnimateBackground from '../../atoms/AnimateBackground'
import media, { isMobile } from '../../../utils/media'

const GradientBg = styled(AnimateBackground)`
  height: 100%;
  width: 100%;
`
const Notes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 32px;

  ${media.lessThan('s')`
    padding: 0;
  `} 
`
const Repository = styled(Tree)`
  padding: 32px 8px;
  width: 100%;
  overflow: auto;
  display: ${({ selected }) => isEmpty(selected) ? '' : 'none'};

  ${media.greaterThan('s')`
    padding: 0;
    display: block;
    width: 40%;
    height: 100%;
  `} 
`
const Content = styled(Visualizer)`
  position: relative;
  border: 1px solid #fff;
  width: 100%;
  padding: 8px;
  display: flex;
  overflow: auto;

  ${media.lessThan('s')`
    border: none;
    display: ${({ selected }) => isEmpty(selected) ? 'none' : ''};
  `} 
`

const Home = () => {
  const mobile = isMobile()
  const [selected, updateSelected] = useState(mobile ? '' : 'projets/site-perso')
  console.log('selected ? ', selected)

  return (
    <GradientBg>
      <Notes>
        <Repository
          tree={files}
          update={updateSelected}
          selected={selected} />
        <Content
          update={updateSelected}
          selected={selected} />
      </Notes>
    </GradientBg>
  )
}

export default Home
