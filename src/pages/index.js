import React from "react"

import About from "../components/pages/About"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="About"
          keywords={[
            `blog`,
            `Tomas Eglinskas`,
            `programming`,
            `tech`,
            "medium",
          ]}
        />
        <About />
      </>
    )
  }
}

export default IndexPage
