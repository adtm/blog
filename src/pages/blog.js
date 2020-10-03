import React from 'react'

import Blog from '../components/pages/Blog'
import SEO from '../components/seo'


class BlogPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Blog"
          keywords={[`blog`, `Tomas Eglinskas`, `programming`, `tech`, 'medium']}
        />
        <Blog />
      </>
    )
  }
}



export default BlogPage
