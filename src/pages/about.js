import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h3`
  font-size: 36px;
  font-weight: 600;
  margin: 20px 0px;
`

const Text = styled.p`
  font-size: 16px;
  line-spacing: 25;
`

const Container = styled.div`
  position: absolute;
  top: 150px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  margin: auto;
  max-width: 460px;
  font-family: "SF Compact Display";
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <Title>About</Title>
      <Text>
        <p>👋 Hey, I'm Tomas </p>
        <p>
          I'm a software engineer @ Wix, who's searching the world trying to
          understand myself and others.
        </p>
        <p>
          At the moment I'm being proactive in the startup field, participating
          at incubators, hackatons and creating projects for myself. Similary
          the idea of this blog came along - wanting to create something for
          myself to remember, and maybe others to scroll by.
        </p>
        <p>
          My main virtue is people, not technology, as I trully believe that
          people are everything.
        </p>
        <p>
          Therefore don't be afraid to say hi or ask questions. I'm also freely
          reachable at <a href="https://www.linkedin.com/in/tomas-eglinskas">@LinkedIn</a> and  <a href="mailto:tomas.eglinskas@gmail.com">@Mail</a>
        </p>
      </Text>
    </Container>
  </Layout>
)

export default About
