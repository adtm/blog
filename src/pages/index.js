import React from 'react'
import styled from 'styled-components'
import About from '../components/About'
import SEO from '../components/seo'


class IndexPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="About"
          keywords={[`blog`, `Tomas Eglinskas`, `programming`, `tech`, 'medium']}
        />
        <About />
      </>
    )
  }
}



export default IndexPage
