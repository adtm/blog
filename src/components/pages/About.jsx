import React from 'react'
import { Text, Link } from '@chakra-ui/core';

import Icon from '../Icon'
import Subscribe from '../Subscribe/Subscribe';

import WaveingHand from '../../images/waving_hand.png'

const About = () => (
  <>
    <Icon src={WaveingHand} alt="Hand waving" />
    <Text mb={4}>
      I'm Tomas, a software engineer&nbsp;
      <Link href="https://wix.com" color="blue.500">
        @Wix
      </Link>
      , working on big scale systems and keeping everyones code clean.
      </Text>
    <Text mb={4}>
      I like learning about how big and complex systems are built,
      why they are built and how to keep them working. Also, experimenting
      with various technologies and languages, different paradigms and ways to
      make our code more readable and understandable
    </Text>
    <Text mb={4}>
      Besides the technical aspects, one of my main virtues is people,
      because without them, there would be no tech.
    </Text>
    <Text mb={4}>
      Therefore, if you have some questions, don't be afraid to say hi!
    </Text>
    <Subscribe />
  </>
)



export default About
