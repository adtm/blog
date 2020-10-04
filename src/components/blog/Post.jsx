import React from 'react'
import { Heading, Text } from '@chakra-ui/core'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({
  data: { mdx }
}) => {

  const { frontmatter: { title }, body } = mdx

  return (
    <div style={{ maxWidth: 700 }}>
      <Heading as="h1">{title}</Heading>
      <Text>
        <MDXProvider >
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Text>
    </div>
  )
}

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default Post;