import React from "react"
import styles from "./post.module.css"

import Layout from "../layout/layout"
import Footer from '../footer/footer'

const Post = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) => (
  <Layout>
    <article className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.date}>{date}</h3>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: html }}></div>
      <Footer />
    </article>
  </Layout>
)

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Post
