import React from "react"
import PropTypes from "prop-types"


import Header from "../header/Header"
import "./layout.css"

const styles = {
  container: {
    margin: "auto",
    maxWidth: 1024,
    padding: 40,
  },
}

const Layout = ({ children }) => (
  <div style={styles.container}>
    <Header />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
