import React from 'react'

const Post = ({
  data: { mdx }
}) => {

  const { title } = mdx.frontmatter

  return (
    <div>{title}</div>
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