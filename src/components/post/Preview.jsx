import React from "react"
import { Link } from "gatsby"

import styles from "./preview.module.css"

const PREVIEW_LIMIT = 180

const Post = ({ title, date, html, path }) => (
  <article>
    <Link className={styles.link} to={path}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.date}>{date}</h3>
      <p>
        {html
          .substring(3, PREVIEW_LIMIT)
          .replace("<p>", "")
          .replace("</p>", "")
          .concat("...")}
      </p>
    </Link>
  </article>
)

export default Post
