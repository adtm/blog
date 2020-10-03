import React from 'react'
import { Heading, Text, Stack, Code } from '@chakra-ui/core';
import Icon from '../Icon'

import FountainPen from '../../images/fountain_pen.png'

const Blog = () => (
  <>
    <Icon src={FountainPen} alt="Fountain Pen" />
    <Text mb={10}>
      I have made a personal challenge to write more, about various technology,
        about how systems work, how I would have wanted to know the difference between <Code>mySQL</Code> and <Code>noSQL</Code> for example.
      </Text>
    <Stack marginRight="auto">
      <Heading mb={2} as="h1" >
        All Posts
        </Heading>
      <Stack>
        <Text>
          No posts, for now
        </Text>
      </Stack>
    </Stack>
  </>
)

export default Blog;