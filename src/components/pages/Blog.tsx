import React from "react"
import { Text, Code, Box } from "@chakra-ui/react"
import WideLayout from "../layouts/Wide"
import BlogPosts from "./blog/Posts"

import "../../styles/global.styles.css"

const Blog = () => (
  <WideLayout
    styles={{
      top: "30%",
      position: "absolute",
      justifyContent: "center",
      transform: "translate(0%, -30%)",
    }}
  >
    <Text fontSize={{ base: 18, md: 20 }} maxW={1000}>
      I have made a personal challenge to write more, about various technology.
      About how systems work, how I would have wanted to know the difference
      between <Code>mySQL</Code> and <Code>noSQL</Code> for example.
    </Text>
    <Box mt={10}>
      <BlogPosts />
    </Box>
  </WideLayout>
)

export default Blog
