import React from "react"
import styled from "styled-components"

import { graphql } from "gatsby"
import Layout from "./layout"
import Post from "./QuickPost"

const Container = styled.div`
  margin: auto;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 20px;
  max-width: 600px;
  font-family: "SF Compact Display";

  @media screen and (max-width: 480px) {
    & {
      margin-top: 50px;
    }
  }
`

const ExpandedPost = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html

  return (
    <Layout>
      <Container>
        <Post
          maxWidth={800}
          {...data.markdownRemark.frontmatter}
          html={data.markdownRemark.html}
        />
      </Container>
    </Layout>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
      }
    }
  }
`

export default ExpandedPost
