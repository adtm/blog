import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from 'gatsby'

const Post = ({
  data
}) => {
  
  const { frontmatter: { title }, body } = data.mdx

  return (
    <MDXProvider >
      <div style={{ maxWidth: 700 }}>
        <Heading as="h1">{title}</Heading>
        <Text>
          <MDXRenderer>{body}</MDXRenderer>
        </Text>
      </div>
    </MDXProvider>
  )
}

// export const pageQuery = graphql`
//   query PostQuery($id: String!) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//       }
//     }
//   }
// `

export default Post;