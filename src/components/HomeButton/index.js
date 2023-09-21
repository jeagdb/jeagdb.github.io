import Link from 'next/link'
import styled from 'styled-components'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;  
  width: 24px;
  height: 24px;
  top: 8px;
  left: 12px;
  padding: 4px;
  cursor: pointer;
`

const Button = () => {
  return (
    <Link href='/'>
      <HomeButton
        icon={faHouse}
        color='white'/>
    </Link>
  )
}

export default Button