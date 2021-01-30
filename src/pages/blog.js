import React from "react"
import SEO from "../components/seo"
import Blog from "../components/pages/Blog"

class BlogPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Blog"
          keywords={[
            "Tomas Eglinskas",
            "Software Engineer",
            "Lithuania",
            "Blog"
          ]}
        />
        <Blog />
      </>
    )
  }
}

export default BlogPage
