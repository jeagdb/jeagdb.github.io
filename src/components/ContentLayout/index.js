import Head from 'next/head'
import styled from 'styled-components'
import { useState } from 'react'

import Tree from '../Tree'
import media from '@/services/media'
import GradientBg from '../GradientBg'
import contentTree from '../../../public/content-tree.json'
import GlobalStyles from '../GlobalStyles'
import MdVisualizer from '../MdVisualizer'

const Page = styled(GradientBg)`
  height: 100%;
  max-width: 100%;
  padding: 24px 32px;
`
const Inline = styled.div`
  display: flex;
  gap: 16px;
  max-width: 100%;

  ${media.lessThan('m')`
    justify-content: center;
  `} 
`

const ContentLayout = ({ content }) => {
  const [back, updateBack] = useState(false)

  return (
    <>
      <GlobalStyles />
      <Page>
        <Head>
          <title>{content.title}</title>
          <meta name="description" content="Jeagdb website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo512.png" />
        </Head>
        <Inline>
          <Tree
            id={content.id}
            back={back}
            tree={contentTree}
            updateBack={updateBack} />
          <MdVisualizer
            back={back}
            html={content.content}
            title={content.title}
            updateBack={updateBack} />
        </Inline>
      </Page>
    </>
  )
}

ContentLayout.layout = ContentLayout

export default ContentLayout