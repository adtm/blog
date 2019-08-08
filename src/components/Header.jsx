import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;  
  justify-content: center;
  align-items: center;
`

const Category = styled(Link)`
  font-family: "SF Compact Display";
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  margin: 40px 20px 0 20px;
  color: #000;
`

const Name = styled.p`
  position: absolute;
  font-family: "SF Compact Display";
  font-size: 18px;
  font-weight: 600;
  margin: 40px 20px 0 20px;
  color: #000;
  left: 20px;

  @media screen and (max-width: 640px){

    & {
      position: absolute;
      visibility: hidden;
    }

  }
`

const Header = () => (
  <StyledHeader>
    <Name>Tomas Eglinskas</Name>
    <Category to="/about">🚧 Blog 🚧</Category>
    <Category to="/about">About</Category>
  </StyledHeader>
)

export default Header
