import React from "react"
import styles from "./footer.module.css"

import GithubSVG from "../../icons/github.svg"
import TwitterSVG from "../../icons/twitter.svg"
import LinkedInSVG from "../../icons/linkedin.svg"

const Footer = () => (
  <div className={styles.container}>
    <h6>Tomas Eglinskas</h6>
    <div>
      <img src={GithubSVG} className={styles.icon} />
      <img src={TwitterSVG} className={styles.icon} />
      <img src={LinkedInSVG} className={styles.icon} />
    </div>
  </div>
)

export default Footer
