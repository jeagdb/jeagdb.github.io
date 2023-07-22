import fs from 'fs'
import html from 'remark-html'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'


export const getContentData = async ({ id }) => {
  const rootDirectory = path.join(process.cwd(), 'content')
  const currentPath = `${id.replace(/-/g, '/')}.md`
  const fullPath = path.join(rootDirectory, currentPath)
  const content = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(content)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  return {
    id,
    path: currentPath,
    content: processedContent.toString(),
    ...matterResult.data
  }
}