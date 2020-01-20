import React from "react"
import styles from "./footer.module.css"

import GithubSVG from "../../icons/github.svg"
import TwitterSVG from "../../icons/twitter.svg"
import LinkedInSVG from "../../icons/linkedin.svg"

const Footer = () => (
  <div className={styles.container}>
    <div>
      <a href="https://lt.linkedin.com/in/tomas-eglinskas">
        <img src={LinkedInSVG} className={styles.icon} />
      </a>
      <a href="https://twitter.com/tomas_eglinskas">
        <img src={TwitterSVG} className={styles.icon} />
      </a>
      <a href="https://github.com/adtm">
        <img src={GithubSVG} className={styles.icon} />
      </a> 
    </div>
  </div>
)

export default Footer
