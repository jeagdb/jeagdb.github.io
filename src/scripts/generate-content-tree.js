const fs = require('fs')
const path = require('path')

const generateContentTree = (dir) => {
  const tree = {}
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const fullPath = path.resolve(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      tree[file] = generateContentTree(fullPath)
    } else {
      const match = fullPath.match(/content(.*\/)(.+).md$/)
      tree[file] = `${match[1].replace('/', '')}${match[2]}`.replace(/\//g, '-')
    }
  })

  return tree
}

const tree = generateContentTree('./content')
fs.writeFileSync('public/content-tree.json', JSON.stringify(tree))

const generateTreeIds = (tree) => {
  return Object.values(tree).reduce((acc, value) => {
    if (typeof value === 'string') {
      return [...acc, { params: { id: value } }]
    }

    return [...acc, ...generateTreeIds(value)]
  }, [])
}

fs.writeFileSync('public/ids-tree.json', JSON.stringify(generateTreeIds(tree)))
