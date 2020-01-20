import React from "react"
import styles from './header.module.css'

import { Link } from "gatsby"

const Header = () => (
  <div className={styles.header}>
    <Link className={styles.title} to="/"> Tomas Eglinskas</Link>
    <div>
      <Link className={styles.link} to="/">Posts</Link>
      <Link className={styles.link} to="/about">About</Link>
    </div>
  </div>
)

export default Header
