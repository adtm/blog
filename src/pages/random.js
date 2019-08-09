import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import Post from '../components/Post'
import SEO from "../components/seo"
import Label from "../components/Label";

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`

const PostContainer = styled.div`
  position: absolute;
  top: 250px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  margin: auto;
  text-align:center;
`

const Text = styled.span`
  max-width: 960px;
  font-family: "SF Compact Display";
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0px;

`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LabelContainer>
      <Label name="AI"/>
      {/* <Label name="Leet Code" bgColor="#FDC536" hoverColor="#FFB906"/> */}

    </LabelContainer>
    <PostContainer>
      {/* <Post /> */}
      <Text>🚧 In the works 🚧</Text>
    </PostContainer>
  </Layout>
)

export default IndexPage
