import Link from 'next/link'
import styled from 'styled-components'

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

const File = ({ name, path, selected, updateSelected }) => {
  return (
    <FileTitle selected={selected === path} onClick={() => updateSelected(path)}>
      <Round selected={selected === path} />
      <Link href={`/content/${path}`}>{name}</Link>
    </FileTitle>
  )
}

export default File