import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { filter, includes } from 'lodash'

import File from '../File'
import media from '@/services/media'
import Folder from '../Folder'
import HomeButton from '../HomeButton'

const Container = styled.div`
  ${media.lessThan('m')`
    display: ${({ visible }) => visible ? 'block' : 'none'};
  `} 
`
const Arborescence = styled.div`
  display: flex;
  align-self: start;
  flex-direction: column;
  overflow: auto;
  padding: 16px;
  min-width: 300px;
  max-height: 500px;
`

const Tree = ({ id, tree, back, updateBack }) => {
  const [selected, updateSelected] = useState(id)
  const [openFolders, updateOpenFolders] = useState([])

  const handleFolderClick = useCallback((event, name) => {
    updateOpenFolders(prevOpenFolders => {
      if (includes(prevOpenFolders, name)) {
        return filter(prevOpenFolders, folder => folder !== name)
      } else {
        return [...prevOpenFolders, name]
      }
    })
  }, [updateOpenFolders])

  const handleFileClick = useCallback((path) => {
    updateSelected(path)
    updateBack(!back)
  }, [back, updateBack, updateSelected])

  const renderTree = useCallback((node, elt) => {
    if (typeof node === "object") {
      return (
        <Folder
          key={elt}
          name={elt}
          selected={selected}
          isOpen={includes(openFolders, elt)}
          handleClick={handleFolderClick}>
          {Object.keys(node).map((childElt) =>
            renderTree(node[childElt], childElt, selected))}
        </Folder>
      )
    }

    return (
      <File
        key={elt}
        name={elt}
        path={node}
        selected={selected}
        updateSelected={handleFileClick} />
    )
  }, [selected, openFolders, handleFolderClick, handleFileClick])

  return (
    <Container visible={back}>
      <HomeButton />
      <Arborescence>
        {Object.keys(tree).map((elt) => renderTree(tree[elt], elt))}
      </Arborescence>
    </Container>
  )
}

export default Tree