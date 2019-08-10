import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  max-width: 960px;
  font-family: "SF Compact Display";
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  flex-direction: column;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
    <iframe
    title="404"
      src="https://giphy.com/embed/4sRgvD40CDTeo"
      width="480"
      height="270"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
    <p>
      404
    </p>
    </Container>
    

  </Layout>
)

export default NotFoundPage
