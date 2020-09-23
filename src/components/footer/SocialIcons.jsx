import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon';

import linkedin from '../../images/icons/linkedin.svg'
import medium from '../../images/icons/medium.svg'
import twitter from '../../images/icons/twitter.svg'
import github from '../../images/icons/github.svg'
import mail from '../../images/icons/mail.svg'


const SocialIcon = styled(Icon)`
  padding-right: 15px;
`

const ICONS = [
  { name: "Email", icon: mail, url: 'mailto:tomas.eglinskas@gmail.com' },
  { name: "Github", icon: github, url: 'https://github.com/adtm' },
  { name: "LinkedIn", icon: linkedin, url: 'https://www.linkedin.com/in/tomas-eglinskas/' },
  { name: "Medium", icon: medium, url: 'https://medium.com/@tomas.eglinskas' },
  { name: "Twitter", icon: twitter, url: 'https://twitter.com/tomas_eglinskas' },
]

const SocialIcons = () => (
  ICONS.map(({ name, icon, url }) => (
    <a target="_blank" href={url} alt={name} rel="noreferrer">
      <SocialIcon src={icon} />
    </a>
  ))
)

export default SocialIcons;
