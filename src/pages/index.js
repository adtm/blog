import React from "react"
import { graphql } from "gatsby"

import Post from "../components/post/Preview"
import Layout from "../components/layout/layout"

const HomePage = ({ data: { allMarkdownRemark } }) => (
  <Layout>
    <div>
      {allMarkdownRemark.edges.map(({ node }) => (
        <Post {...node.frontmatter} html={node.html} />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default HomePage
