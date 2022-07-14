import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get, map } from 'lodash'

import Link from '../../atoms/Links'

const Container = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Links = ({ links, ...props }) => (
  <Container {...props}>
    {map(links, link =>
      <Link
        key={get(link, 'label')}
        link={link} />)}
  </Container>
)

Links.propTypes = {
  links: PropTypes.array.isRequired
}

export default Links
