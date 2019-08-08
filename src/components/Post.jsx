import React from "react"
import styled from "styled-components"

import Label from "./Label"
import { Link } from "gatsby"

const Container = styled.div`
  margin: auto;
  max-width: 460px;
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
  margin: 5px 0px;
`

const Text = styled.p`
  font-size: 14px;
  line-spacing: 25;
`

const Post = () => (
  <Container>
    <Label name="AI" />
    <PostContainer to="/post">
      <Title>My Journey of Learning AI</Title>
      <Date>2019, August 25</Date>
      <Text>
        I decided to start my AI journey and blog my path through, explaining
        how I understand and of course fail to understand things. This more of a
        memory for my future self looking back and for someone if they need that
        explain like I’m five explanation
      </Text>
    </PostContainer>
  </Container>
)

export default Post
