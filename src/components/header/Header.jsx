import React from "react"
import styles from './header.module.css'

import { Link } from "gatsby"

const Header = () => (
  <div className={styles.header}>
    <p className={styles.title}>Tomas Eglinskas</p>
    <div>
      <Link className={styles.link} to="/">Posts</Link>
      <Link className={styles.link} to="/about">About</Link>
    </div>
  </div>
)

export default Header
