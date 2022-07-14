import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import { options } from '../../../config/markdown'

const Page = styled.div`
  position: relative;
  border: 1px solid #fff;
  width: 100%;
  padding: 16px;
  display: flex;
  overflow: auto;
`
const Title = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #fff;
  border-top: none;
  border-right: none;
  padding: 4px 4px 4px;
`

const Visualizer = ({ selected, update }) => {
  const [text, updateText] = useState('Sélectionner un fichier dans l\'arborescence')

  useEffect(() => {
    if (isEmpty(selected)) {
      return
    }

    import(`../../../content/${selected}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => {
            return res.text()
          })
          .then(res => updateText(res))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }, [selected])

  return (
    <>
    <Page>
      <Title>{`${selected}`}</Title>
      <Markdown options={options}>
        {text}
      </Markdown>
    </Page>
    </>
  )
}

Visualizer.propTypes = {
  update: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default Visualizer
