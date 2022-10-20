import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import A from '../../atoms/A'
import Pre from '../../atoms/Pre'
import Icon from '../../atoms/Icon'
import Loading from '../../atoms/Loading'
import media, { isMobile } from '../../../utils/media'

const Page = styled.div`
  display: flex;
`
const Title = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #fff;
  border-top: none;
  border-right: none;
  padding: 4px 4px 4px;
  color: #fff;
  background: #659DBD;

  ${media.greaterThan('l')`
    font-size: 20px;
  `} 

  ${media.lessThan('s')`
    position: fixed;
    border: 1px solid #659DBD;
  `} 
`
const Content = styled.div`
  padding: 32px 8px;
  width: 100%;

  ${media.greaterThan('l')`
    padding: 8px 24px;
  `}
`
const BackButton = styled(Icon)`
  z-index: 20;
  position: fixed;

  border: 1px solid #659DBD;
  border-radius: 50px;
  padding: 8px;
  width: 32px;
  height: 32px;
  top: 8px;
  left: 8px;
  background: #659DBD;
`
const Loader = styled(Loading)`
  align-self: center;
  margin-right: auto;
  margin-left: auto;
`
const MdImg = styled.img`
  max-width: 100%;
`

const MdVisualizer = ({ selected, update, ...props }) => {
  const [text, updateText] = useState('')
  const [loading, updateLoading] = useState(true)
  const mobile = isMobile()
  const options = {
    overrides: {
      a: {
        component: A
      },
      pre: {
        component: Pre
      },
      img: {
        component: MdImg
      }
    }
  }

  const handleBack = useCallback(() => {
    updateText('')
    update('')
  }, [])

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
      .finally(() => updateLoading(false))
  }, [selected])

  useEffect(() => {
  }, [loading])

  return (
    <Page {...props}>
      {mobile && !isEmpty(selected) && <BackButton variant='arrowLeft' onClick={handleBack} />}
      <Title>{`${selected}`}</Title>
      <Loader loading={loading} />
      {!loading &&
        <Content>
          <Markdown options={options}>{text}</Markdown>
        </Content>
      }
    </Page>
  )
}

MdVisualizer.propTypes = {
  update: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default MdVisualizer
