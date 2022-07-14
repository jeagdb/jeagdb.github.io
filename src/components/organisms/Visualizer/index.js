import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'

import { options } from '../../../config/markdown'

const Center = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  gap: 16px;
`

const Visualizer = ({ selected, update }) => {
  const [text, updateText] = useState('')

  useEffect(() => {
    import('../../../content/projets/test.md')
      .then(res => {
        fetch(res.default)
          .then(res => {
            return res.text()
          })
          .then(res => updateText(res))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  })

  return (
    <Center>
      <h1>hei</h1>
      <Markdown options={options}>{text}</Markdown>
    </Center>
  )
}

Visualizer.propTypes = {
  update: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default Visualizer
