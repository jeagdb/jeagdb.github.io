import styled from 'styled-components'
import { get } from 'lodash'

const A = styled.a`
  color: ${({ theme }) => get(theme, 'white', '#fff')};
  font-weight: 600;
  font-style: italic;
  text-decoration: underline;
`

export default A
