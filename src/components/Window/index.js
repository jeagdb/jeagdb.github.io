import styled from 'styled-components'
import { Button, Window, WindowContent, WindowHeader } from 'react95'

import media from '@/services/media'

const StyledWindow = styled(Window)`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  min-width: 300px;

  ${media.lessThan('m')`
    top: 0;
    left: 0;
    width: 100%;
    height: 94%;
    overflow-y: auto;
  `}
`

const StyledWindowHeader = styled(WindowHeader)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Window95 = ({ title, onClose, children, ...props }) => {
  const top = 5
  const left = 20

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