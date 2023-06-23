import paths from '../../../public/ids-tree.json'
import ContentLayout from '../../components/ContentLayout'
import { getContentData } from '../../services/content'


const Content = ({ content }) => {
  return (
    <ContentLayout content={content} />
  )
}

export const getStaticPaths = async () => ({
  paths,
  fallback: false
})

export const getStaticProps = async ({ params }) => ({
  props: {
    content: await getContentData(params),
  }
})

export default Content