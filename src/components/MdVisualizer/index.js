import styled from 'styled-components'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import media from '../../services/media'

const Page = styled.div`
  display: flex;
  border: 1px solid #fff;
  padding: 0px 8px;
  max-width: 100%;
  height: 80%;

  ${media.lessThan('m')`
    border: none;
    padding: 0px 0px;
    margin-top: 18px;
    font-size: 16px;
    display: ${({ visible }) => visible ? 'block' : 'none'};
  `} 
`
const Title = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #fff;
  border-top: none;
  border-right: none;
  padding: 2px 16px;
  color: #fff;
  background: #659DBD;

  ${media.greaterThan('m')`
    font-size: 17px;
  `} 
`
const Content = styled.div`
  padding: 0px 8px;
  max-height: 550px;
  overflow-y: scroll;
`
const BackButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 8px;
  left: 12px;
  padding: 4px;
  cursor: pointer;
  color: white;
  width: 26px;

  ${media.greaterThan('m')`
    display: none;
  `} 
`

const MdVisualizer = ({ html, title, back, updateBack }) => {
  return (
    <Page visible={!back}>
      <Title>{title}</Title>
      <BackButton
        icon={faArrowLeft}
        color='white'
        onClick={() => updateBack(!back)}
        fontSize={10} />
      <Content>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </Page>
  )
}

export default MdVisualizer