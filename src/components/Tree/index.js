import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { filter, includes } from 'lodash'

import File from '../File'
import Folder from '../Folder'

const Arborescence = styled.div`
  display: flex;
  align-self: start;
  flex-direction: column;
  overflow: auto;
  padding: 16px;
  min-width: 300px;
  max-height: 500px;
`

const Tree = ({ id, tree }) => {
  const [selected, updateSelected] = useState(id)
  const [openFolders, setOpenFolders] = useState([])

  const handleFolderClick = useCallback((name) => {
    console.log('here : ', name)
    setOpenFolders(prevOpenFolders => {
      if (includes(prevOpenFolders, name)) {
        return filter(prevOpenFolders, folder => folder !== name)
      } else {
        return [...prevOpenFolders, name]
      }
    })
  }, [])

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
        updateSelected={updateSelected} />
    )
  }, [selected, openFolders, handleFolderClick, updateSelected])

  return (
    <Arborescence>
      {Object.keys(tree).map((elt) => renderTree(tree[elt], elt))}
    </Arborescence>
  )
}

export default Tree