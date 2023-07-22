import styled from 'styled-components'

import media from '@/services/media'

const Block = styled.div`
  margin-left: 16px;
  font-size: 18px;
`
const FolderTitle = styled.div`
  cursor: pointer;
  font-size: 18px;
  ${media.lessThan('m')`
    font-size: 22px;
  `} 
`

const Folder = ({ name, children, isOpen, handleClick }) => {
  return (
    <Block>
      <FolderTitle onClick={(event) => handleClick(event, name)}>
        {name} {isOpen ? "-" : "+"}
      </FolderTitle>
      {isOpen && children}
    </Block>
  )
}

export default Folder