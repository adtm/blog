import React from 'react'
import { Link } from 'gatsby'
import { Heading, Box, Tag, Text } from '@chakra-ui/core'

const Tags = ({ tags }) => (
  <>
    {
      tags.map(tag =>
        <Tag key={tag} size="sm" mr={3} fontSize={12} borderRadius={5}>{tag}</Tag>
      )
    }
  </>
)

const Card = ({ slug, title, tags, summary }) => (
  <Link to={`${slug}`}>
    <Box my={5}>
      <Heading as="h3" size="md" mb={2} fontWeight="medium">{title}</Heading>
      <Tags tags={tags.split(" ")} />
      <Text my={3} >
        {summary}
      </Text>
    </Box>
  </Link>
)


export default Card;