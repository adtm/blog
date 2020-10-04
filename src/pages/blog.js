import React from "react"

import BlogPosts from "../components/blog/Posts"
import SEO from "../components/seo"
import { Text, Code } from "@chakra-ui/core"

import Icon from "../components/Icon"
import FountainPen from "../images/fountain_pen.png"

class BlogPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Blog"
          keywords={[
            `blog`,
            `Tomas Eglinskas`,
            `programming`,
            `tech`,
            "medium",
          ]}
        />
        <Icon src={FountainPen} alt="Fountain Pen" />
        <Text mb={10}>
          I have made a personal challenge to write more, about various
          technology, about how systems work, how I would have wanted to know
          the difference between <Code>mySQL</Code> and <Code>noSQL</Code> for
          example.
        </Text>
        <BlogPosts />
      </>
    )
  }
}

export default BlogPage
