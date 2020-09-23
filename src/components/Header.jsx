import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Icon from './Icon'

import Moon_Icon from '../images/icons/moon.svg'
import UnderMaintenance_Logo from '../images/construction.png'


const Header = () => (
  <CenterContainer>
    <StyledLink to="/">
      <span>About</span>
    </StyledLink>
    {/* <StyledLink>
      <Icon src={Moon_Icon} />
    </StyledLink> */}
    <StyledLink to="/blog">
      <Center>
        <span>Blog</span>
        <OverIcon>
          <Icon src={UnderMaintenance_Logo} />
        </OverIcon>
      </Center>
    </StyledLink>
  </CenterContainer>
)

const Center = styled.div`
  position: relative;
`

const OverIcon = styled.div`
  position: absolute;
  top: -5px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0;
  padding-left: 30px;
`

const CenterContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header
