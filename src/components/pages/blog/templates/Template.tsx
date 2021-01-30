import React from "react"
import { Heading, Text } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Template = ({ data: { mdx } }) => {
  const {
    frontmatter: { title },
    body,
  } = mdx

  return (
    <MDXProvider>
      <div style={{ maxWidth: 700 }}>
        <Heading as="h1">{title}</Heading>
        <Text>
          <MDXRenderer>{body}</MDXRenderer>
        </Text>
      </div>
    </MDXProvider>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default Template
