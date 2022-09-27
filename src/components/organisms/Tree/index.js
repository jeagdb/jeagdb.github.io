import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get, keys, map, isEqual, isEmpty, flatten, isArray } from 'lodash'
import React, { useCallback, useState } from 'react'

import Icon from '../../atoms/Icon'
import media from '../../../utils/media'

const Arborescence = styled.div`
  display: flex;
  padding-right: 16px;
  align-self: start;
  flex-direction: column;
  justify-content: center;
`
const Block = styled.div`
  margin-left: 16px;
  margin-bottom: 4px;
  font-size: 18px;

  ${media.greaterThan('l')`
    font-size: 20px;
  `} 
`
const Directory = styled.div`
  margin-top: 4px;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;

  ${media.greaterThan('l')`
    gap: 8px;
  `} 
`

const DirectoryIcon = styled(Icon)`
  transform: scale(1.2);

  ${media.greaterThan('l')`
    transform: scale(1.4);
  `}
`
const File = styled.div`
  margin: 4px 0 0 16px;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`
const Inline = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
const Round = styled.div`
  border: ${({ selected }) => selected ? '6px' : '2px'} solid #fff;
  width: 12px;
  height: 12px;
  border-radius: 100%;
`

const Parent = ({ current, currentPath, child, selected, onClick }) => {
  const [open, updateOpen] = useState(false)

  const handleClick = useCallback(() => {
    updateOpen(!open)
  }, [open])

  const folderContent = isArray(current)
    ? generateFiles(current, currentPath, selected, onClick)
    : buildTree(current, currentPath, selected, onClick)

  return (
    <Block>
      <Directory onClick={handleClick}>
        <DirectoryIcon variant={open ? 'arrowDown' : 'arrowRight'} />
        {child}
      </Directory>
      {open && folderContent}
    </Block>
  )
}

Parent.propTypes = {
  child: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  current: PropTypes.any.isRequired,
  selected: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired
}

const generateFiles = (files, path, selected, onClick) =>
  map(files, (file, key) => (
    <File key={key} onClick={() => onClick(`${path}${file}`)}>
      <Inline>
        <Round selected={isEqual(selected, `${path}${file}`)} />
        {file}
      </Inline>
    </File>
  ))

const buildTree = (tree, path, selected, onClick) => {
  const children = keys(tree)

  if (isEmpty(children) || isEqual(children, ['0'])) {
    return
  }

  return flatten(map(children, child => {
    const current = get(tree, child)
    const currentPath = `${path}${child}/`

    return (
      <Parent
        key={currentPath}
        child={child}
        onClick={onClick}
        current={current}
        selected={selected}
        currentPath={currentPath} />
    )
  }))
}

const Tree = ({ tree, selected, update, ...props }) => {
  const onClick = (filename) => {
    update(filename)
  }

  return (
    <div {...props}>
      <Arborescence>
        {buildTree(tree, '', selected, onClick)}
      </Arborescence>
    </div>
  )
}

Tree.propTypes = {
  tree: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default Tree
