import styled from 'styled-components'

const Block = styled.div`
  margin-left: 16px;
  font-size: 18px;
`
const FolderTitle = styled.div`
  cursor: pointer;
  font-size: 18px;
`

const Folder = ({ name, children, isOpen, handleClick }) => {
  return (
    <Block>
      <FolderTitle onClick={() => handleClick(name)}>
        {name} {isOpen ? "-" : "+"}
      </FolderTitle>
      {isOpen && children}
    </Block>
  )
}

export default Folder