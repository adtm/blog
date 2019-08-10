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
  margin: auto;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 20px;
  max-width: 460px;
  font-family: "SF Compact Display";

  @media screen and (max-width: 480px) {
    & {
      margin-top: 50px;
    }
  }
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <Title>About</Title>
      <Text>
        <p>
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          Hey, I'm Tomas{" "}
        </p>
        <p>
          A software engineer @ Wix, who's searching the world trying to
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
          reachable at{" "}
          <a href="https://www.linkedin.com/in/tomas-eglinskas">@LinkedIn</a>{" "}
          and <a href="mailto:tomas.eglinskas@gmail.com">@Mail</a>
        </p>
      </Text>
    </Container>
  </Layout>
)

export default About
