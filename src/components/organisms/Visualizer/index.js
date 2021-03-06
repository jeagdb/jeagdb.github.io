import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { get, isEmpty } from 'lodash'

import media from '../../../utils/media'
import Loading from '../../atoms/Loading'
import { options } from '../../../config/markdown'

const Page = styled.div`
`
const Title = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #fff;
  border-top: none;
  border-right: none;
  padding: 4px 4px 4px;
  color: ${({ theme }) => get(theme, 'white', '#fff')};

  ${media.greaterThan('l')`
    font-size: 20px;
  `} 
`

const Visualizer = ({ selected, update, ...props }) => {
  const [text, updateText] = useState('')
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    if (isEmpty(selected)) {
      return
    }

    updateLoading(true)

    import(`../../../content/${selected}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => {
            return res.text()
          })
          .then(res => updateText(res))
          .catch(() => updateText(''))
      })
      .catch(() => {
        updateText('')
        update('notFound')
      })

    updateLoading(false)
  }, [selected, updateLoading])

  return (
    <Page {...props}>
      <Title>{`${selected}`}</Title>
      <Loading loading={loading}/>
      {!loading && <Markdown options={options}>
        {text}
      </Markdown>}
    </Page>
  )
}

Visualizer.propTypes = {
  update: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default Visualizer
