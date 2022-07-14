import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get, keys, map, isEqual, isEmpty, flatten, isArray } from 'lodash'
import { useCallback, useState } from 'react'

import Icon from '../../atoms/Icon'

const Container = styled.div`
  width: 40%;
  display: flex;
  gap: 16px;
  align-self: start;
  flex-direction: column;
  justify-content: center;
`
const Block = styled.div`
  margin-left: 24px;
`
const Directory = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 24px;
  margin-left: 16px;
`
const DirectoryIcon = styled(Icon)`
  cursor: pointer;
`
const File = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin: 4px 0 0 48px;
  font-size: 18px;
  cursor: pointer;
`
const Parent = ({ current, currentPath, child, onClick }) => {
  const [open, updateOpen] = useState(false)

  const handleClick = useCallback(() => {
    updateOpen(!open)
  }, [open])

  const folderContent = isArray(current)
    ? generateFiles(current, currentPath, onClick)
    : buildTree(current, currentPath, onClick)

  return (
    <Block>
      <Directory>
        <DirectoryIcon
          variant={open ? 'arrowDown' : 'arrowRight'}
          onClick={handleClick} />
        {child}
      </Directory>
      {open && folderContent}
    </Block>
  )
}

Parent.propTypes = {
  child: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
  currentPath: PropTypes.string.isRequired
}

const generateFiles = (files, path, onClick) =>
  map(files, file => (
    <File onClick={() => onClick(`${path}${file}`)}>
      <p>☉</p>
      {file}
    </File>
  ))

const buildTree = (tree, path, onClick) => {
  const children = keys(tree)

  if (isEmpty(children) || isEqual(children, ['0'])) {
    return
  }

  return flatten(map(children, child => {
    const current = get(tree, child)
    const currentPath = `${path}${child}/`

    return (
      <Parent
        child={child}
        onClick={onClick}
        current={current}
        currentPath={currentPath} />
    )
  }))
}

const Tree = ({ tree, update }) => {
  const onClick = (filename) => {
    update(filename)
  }

  return (
    <Container>
      {buildTree(tree, '', onClick)}
    </Container>
  )
}

Tree.propTypes = {
  tree: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired
}

export default Tree
