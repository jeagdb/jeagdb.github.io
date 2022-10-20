import styled from 'styled-components'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { lioshi } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { get, split, last } from 'lodash'

const Container = styled(SyntaxHighlighter)`
  padding: 16px !important;
  border-radius: 4px;
  width: 100%;
`

const Pre = ({ children, ...props }) => {
  if ('type' in children && get(children, 'type') === 'code') {
    const language = last(split(get(children, 'props.className', 'lang-js')))

    return (
      <Container language={language} style={lioshi}>
        {get(children, 'props.children')}
      </Container>
    )
  }
  return <pre {...props}>{children}</pre>
}

Pre.propTypes = {
  children: PropTypes.any
}

export default Pre
