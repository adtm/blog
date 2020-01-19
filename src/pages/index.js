import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Post from "../components/post/Preview"
import Layout from "../components/layout/layout"

const Container = styled.div`
  margin: auto;
  max-width: 640px;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 20px;


  @media screen and (max-width: 480px) {
    & {
      margin-top: 50px;
    }
  }
`

const HomePage = ({ data: { allMarkdownRemark } }) => (
  <Layout>
    <Container>
      {allMarkdownRemark.edges.map(({ node }) => (
        <Post {...node.frontmatter} html={node.html} />
      ))}
    </Container>
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
            path
            tags
          }
        }
      }
    }
  }
`

export default HomePage
