import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Label from "../components/label/Label"
import Layout from "../components/layout/layout"

const Container = styled.div`
  margin: auto;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 20px;
  max-width: 800px;
  font-family: "SF Compact Display";

  @media screen and (max-width: 480px) {
    & {
      margin-top: 50px;
    }
  }
`

const PostContainer = styled(Link)`
  font-family: "SF Compact Display";
  color: #000;
  text-decoration: none;
`

const Title = styled.h3`
  font-size: 32px;
  font-weight: 600;
  margin: 10px 0px;
`

const Date = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0px;
`

const Text = styled.div`
  font-size: 16px;
  line-height: 1.8;
`

const ExpandedPost = ({
  data: {
    markdownRemark: {
      frontmatter: { title, tags, date, path },
      html,
    },
  },
}) => (
  <Layout>
    <Container>
      {tags.map(tag => (
        <Label name={tag} />
      ))}
      <PostContainer to={path}>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Text dangerouslySetInnerHTML={{ __html: html }}></Text>
      </PostContainer>
    </Container>
  </Layout>
)

export const query = graphql`
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
