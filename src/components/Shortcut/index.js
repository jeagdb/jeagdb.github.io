import styled from 'styled-components'

const Shortcut = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  align-items: center;
  cursor: pointer;

  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
  }
`

export default Shortcut