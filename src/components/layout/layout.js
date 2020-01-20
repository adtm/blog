import React from "react"

import Header from "../header/Header"
import styles from './layout.module.css'

import "./global-layout.css"

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)

export default Layout
