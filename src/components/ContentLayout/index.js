import Head from 'next/head'
import styled from 'styled-components'

import Tree from '../Tree'
import GradientBg from '../GradientBg'
import contentTree from '../../../public/content-tree.json'
import GlobalStyles from '../GlobalStyles'
import MdVisualizer from '../MdVisualizer'

const Page = styled(GradientBg)`
  height: 100%;
  width: 100%;
  padding: 24px 32px;
`
const Inline = styled.div`
  display: flex;
  gap: 16px;
`
const Markdown = styled(MdVisualizer)`
  border: 1px solid #fff;
  padding: 0px 8px;
  height: 80%;
`

const ContentLayout = ({ content }) => {
  return (
    <>
      <GlobalStyles />
      <Page>
        <Head>
          <title>{content.title}</title>
          <meta name="description" content="Picou website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo512.png" />
        </Head>
        <Inline>
          <Tree id={content.id} tree={contentTree} />
          <Markdown html={content.content} />
        </Inline>
      </Page>
    </>
  )
}

ContentLayout.layout = ContentLayout

export default ContentLayout