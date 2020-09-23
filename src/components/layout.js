import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'

import FontIncluder from '../fonts/FontIncluder'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
    <FontIncluder />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
