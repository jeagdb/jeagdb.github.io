import styled from 'styled-components'

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
`
const Content = styled.div`
  padding: 0px 8px;
  width: 100%;
  max-height: 550px;
  overflow-y: scroll;
`

const MdVisualizer = ({ html, title, ...props }) => {
  return (
    <Page {...props}>
      <Title>{title}</Title>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </Page>
  )
}

export default MdVisualizer