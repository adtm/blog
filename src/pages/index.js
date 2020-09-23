import React from 'react'
import styled from 'styled-components'
import About from '../components/About'
import SEO from '../components/seo'


class IndexPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="About - Tomas Eglinskas"
          keywords={[`blog`, `Tomas Eglinskas`, `programming`, `tech`, 'medium']}
        />
        <Container>
          <About />
        </Container>
      </>
    )
  }
}

// 40px wave icon
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px); 
  margin: 40px;
`

export default IndexPage
