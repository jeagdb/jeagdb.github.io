import styled from 'styled-components'
import { get, isEmpty } from 'lodash'
import { useCallback, useState } from 'react'

import Icon from '../../atoms/Icon'
import Tree from '../../organisms/Tree'
import files from '../../../content'
import Visualizer from '../../organisms/Visualizer'
import AnimateBackground from '../../atoms/AnimateBackground'
import media, { isMobile } from '../../../utils/media'

const GradientBg = styled(AnimateBackground)`
  height: 100%;
  padding: 32px;
`
const Notes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
const Repository = styled(Tree)`
  width: 100%;
  overflow: auto;
  display: ${({ selected }) => isEmpty(selected) ? '' : 'none'};

  ${media.greaterThan('s')`
    display: block;
    width: 40%;
    height: 100%;
  `} 
`
const Content = styled(Visualizer)`
  position: relative;
  border: 1px solid #fff;
  width: 100%;
  padding: 16px;
  display: flex;
  overflow: auto;

  ${media.lessThan('s')`
    display: ${({ selected }) => isEmpty(selected) ? 'none' : ''};
    position: absolute;
    top: 0;
    border: none;
    padding: 56px 8px 8px 8px;
    height: 100%;
    color: ${({ theme }) => get(theme, 'grey', '#fff')};
    background: ${({ theme }) => get(theme, 'lightBlue', '#fff')};
  `} 
`
const BackButton = styled(Icon)`
  z-index: 20;
  position absolute;
  top: 12px;
  left: 12px;
  transform: scale(2);
`

const Home = () => {
  const mobile = isMobile()
  const [selected, updateSelected] = useState(mobile ? '' : 'projets/site-perso')

  const handleBack = useCallback(() => {
    updateSelected('')
  }, [])

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
        {mobile && !isEmpty(selected) && <BackButton variant='arrowLeft' onClick={handleBack} />}
      </Notes>
    </GradientBg>
  )
}

export default Home
