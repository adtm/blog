import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Container = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Container
