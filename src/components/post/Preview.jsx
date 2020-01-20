import React from "react"
import { Link } from "gatsby"

import styles from "./preview.module.css"

const PREVIEW_LIMIT = 180

const Post = ({ title, date, html, path }) => (
  <article>
    <Link className={styles.link} to={path}>
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.date}>{date}</h4>
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
