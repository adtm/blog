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
  left: 50px;
  bottom: 40px;
`

export default Footer
