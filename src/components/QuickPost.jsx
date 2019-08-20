import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Label from "./Label"

const Container = styled.div`
  margin: auto;
  max-width: ${({ maxWidth }) => maxWidth || "460"}px;
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

const Post = ({ title, date, html, tags, path, maxWidth }) => (
  <Container maxWidth={maxWidth}>
    {tags.map(tag => (
      <Label name={tag} />
    ))}
    <PostContainer to={path}>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Text>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Text>
    </PostContainer>
  </Container>
)

export default Post
