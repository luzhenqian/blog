const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// 每当创建或更新节点时，调用此函数
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `article` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// 添加页面
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/template/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
