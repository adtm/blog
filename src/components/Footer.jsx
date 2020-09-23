import React from 'react'
import styled from 'styled-components'
import SocialIcons from './footer/SocialIcons'


const Footer = () => (
  <Container>
    <SocialIcons />
  </Container>
)

const Container = styled.footer`
  position: absolute;
  bottom: 40px;
  left: 50px;
`

export default Footer
