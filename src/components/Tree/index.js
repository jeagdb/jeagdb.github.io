import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Arborescence = styled.div`
  display: flex;
  align-self: start;
  flex-direction: column;
  overflow: auto;
  padding: 16px;
  min-width: 300px;
  max-height: 500px;
`
const Block = styled.div`
  margin-left: 16px;
  font-size: 18px;
`
const FolderTitle = styled.div`
  cursor: pointer;
  font-size: 18px;
`
const Round = styled.div`
  margin-right: 4px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 1px solid white;
  display: inline-block;
  background-color: ${({ selected }) => selected ? 'white' : 'transparent'};
`
const FileTitle = styled.div`
  margin-left: 16px;
  font-weight: ${({ selected }) => selected ? 600 : 400};
`

const Folder = ({ name, selected, children }) => {
  const [isOpen, setIsOpen] = useState(selected.includes(name))

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Block>
      <FolderTitle onClick={handleClick}>{name} {isOpen ? "-" : "+"}</FolderTitle>
      {isOpen && children}
    </Block>
  )
}

const File = ({ name, path, selected, updateSelected }) => {
  return (
    <FileTitle selected={selected === path} onClick={() => updateSelected(path) }>
      <Round selected={selected === path}/>
      <Link href={`/content/${path}`}>{name}</Link>
    </FileTitle>
  )
}

const renderTree = (node, elt, selected, updateSelected) => {

  if (typeof node === "object") {
    return (
      <Folder
        key={elt}
        name={elt}
        selected={selected}>
        {Object.keys(node).map((childElt) =>
          renderTree(node[childElt], childElt, selected, updateSelected))}
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
}

const Tree = ({ id, tree }) => {
  const [selected, updateSelected] = useState(id)

  return (
    <Arborescence>
      {Object.keys(tree).map((elt) => renderTree(tree[elt], elt, selected, updateSelected))}
    </Arborescence>
  )
}

export default Tree