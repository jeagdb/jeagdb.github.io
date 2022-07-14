import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as ReactRouterLink } from 'react-router-dom'
import { get, isEqual, toUpper } from 'lodash'

const ExtLink = styled.a`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => get(theme, 'white', '#fff')};
  text-decoration: none;
`
const RouterLink = styled(ReactRouterLink)`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => get(theme, 'white', '#fff')};
  text-decoration: none;
`

const Link = ({ link }) => {
  const { type, path, label } = link

  if (isEqual(type, 'external')) {
    return (
      <ExtLink
        rel='noreferrer'
        key={`${label}-${path}`}
        href={path}
        target='_blank'>
        {toUpper(label)}
      </ExtLink>
    )
  }

  return (
    <RouterLink
      to={path}
      key={`${label}-${path}`}>
      {toUpper(label)}
    </RouterLink>
  )
}

Link.propTypes = {
  link: PropTypes.object.isRequired
}

export default Link
