import React from 'react'
import styled from 'styled-components'


const IconHolder = styled.img`
  height: 20px;
  padding: 5px;
`

const Icon = props => <IconHolder {...props} />

export default Icon
