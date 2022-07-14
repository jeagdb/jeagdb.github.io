import styled from 'styled-components'
import PropTypes from 'prop-types'
import { get, keys, map, isEqual, isEmpty, flatten, isArray } from 'lodash'
import { useCallback, useState } from 'react'

const Center = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  gap: 16px;
`
const Container = styled.div`
  margin-left: 24px;
`
const Directory = styled.div`
  display: flex;
  gap: 8px;
  font-size: 24px;
  margin-left: 16px;
`
const DirectoryIcon = styled.div`
  cursor: pointer;
`
const File = styled.div`
  margin: 4px 0 0 48px;
  font-size: 18px;
  cursor: pointer;
`
const Parent = ({ current, currentPath, child, onClick }) => {
  const [open, updateOpen] = useState(false)

  const handleClick = useCallback(() => {
    updateOpen(!open)
  }, [open])

  const folderIcon = open ? 'v' : '>'

  const folderContent = isArray(current)
    ? generateFiles(current, currentPath, onClick)
    : buildTree(current, currentPath, onClick)

  return (
  <Container>
    <Directory>
      {child}
      <DirectoryIcon onClick={handleClick}>{folderIcon}</DirectoryIcon>
    </Directory>
    {open && folderContent}
    </Container>
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
    <File onClick={() => onClick(`${path}${file}`)}>{file}</File>
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
    <Center>
      {buildTree(tree, '', onClick)}
    </Center>
  )
}

Tree.propTypes = {
  tree: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired
}

export default Tree
