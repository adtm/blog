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
            "Tomas Eglinskas",
            "Software Engineer",
            "Lithuania",
            "Blog"
          ]}
        />
        <About />
      </>
    )
  }
}

export default IndexPage
