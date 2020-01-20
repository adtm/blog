import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Footer from "../components/footer/footer"

const About = () => (
  <Layout>
    <SEO title="About" />

    <h2>
      Hey{" "}
      <span role="img" aria-label="wave">
        👋
      </span>
    </h2>

    <p>
      I'm Tomas, a software engineer @Wix, who's searching the world trying to
      understand myself and others.
    </p>
    <p>
      At the moment I'm being proactive in the startup field, participating at
      incubators, hackatons and creating projects for myself. Similary the idea
      of this blog came along - wanting to create something for myself to
      remember, and maybe others to scroll by.
    </p>
    <p>
      My main virtue is people, not technology, as I trully believe that people
      are everything.
    </p>
    <p>Therefore don't be afraid to say hi or ask questions.</p>
    <Footer />
  </Layout>
)

export default About
