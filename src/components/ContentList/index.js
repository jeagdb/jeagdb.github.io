import Link from 'next/link'
import styled from 'styled-components'

const List = styled.li`
  list-style-type: none;
`

const ContentList = ({ contentList }) => {
  return (
    <ul>
      {contentList.map(({ id, subDir, title }) => (
        <List key={id}>
          <Link href={`/content/${id}`}>{title}[{subDir}]</Link>
        </List>
      ))}
    </ul>
  )
}

export default ContentList