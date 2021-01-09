import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Heading, Text, Stack } from '@chakra-ui/react';

import Card from './Card';

const Posts = ({ edges }) => {

  const publishedPosts = edges
    .map(({ node: { id, frontmatter, fields } }) => ({ id, ...frontmatter, ...fields }))
    .filter(post => post.isPublished)

  return (
    <Stack marginRight="auto">
      <Heading mb={10} as="h1">All Posts</Heading>
      <Stack>
        {
          publishedPosts.length === 0 && <Text>No posts, for now</Text>
        }
        {
          publishedPosts.map(post => 
            <Card key={post.id} {...post} />
          )
        }
      </Stack>
    </Stack>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query Query {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                tags
                summary
                isPublished
              }
            }
          }
        }
      }
    `
    }
    render={({ allMdx: { edges } }) => <Posts edges={edges} />}
  />
)

