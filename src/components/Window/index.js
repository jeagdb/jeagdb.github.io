import styled from 'styled-components'
import { random } from 'lodash'
import { Button, Window, WindowContent, WindowHeader } from 'react95'

const StyledWindow = styled(Window)`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  min-width: 300px;
`

const StyledWindowHeader = styled(WindowHeader)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Window95 = ({ title, onClose, children, ...props }) => {
  const top = random(10, 40)
  const left = random(30, 60)

  return (
    <StyledWindow top={top} left={left} {...props}>
      <StyledWindowHeader>
        <span>{title}</span>
        <Button onClick={() => onClose(title)} >
          <span className='close-icon' />
        </Button>
      </StyledWindowHeader>
      <WindowContent>{children}</WindowContent>
    </StyledWindow>
  )
}

export default Window95