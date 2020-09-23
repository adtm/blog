import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

import FontIncluder from '../fonts/FontIncluder'
import './layout.css'

const Layout = ({ children }) => (
  <Container>
    <Header />
    <TextContainer>
      {children}

    </TextContainer>
    <Footer />
    <FontIncluder />
  </Container>
)

// 40px wave icon
const Container = styled.div`
  height: calc(100vh - 80px); 
  margin: 40px;
  display: flex;
  flex-direction: column;
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: inherit;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
