const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: "slug",
            node,
            value: `/${value}`,
        })
    }
}


exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    const posts = result.data.allMdx.edges

    // posts.forEach(({ node }) => {
    //     createPage({
    //         path: node.frontmatter.slug,
    //         component: path.resolve(`./src/components/pages/blog/templates/Template.tsx`),
    //         context: { id: node.id },
    //     })
    // })
}
