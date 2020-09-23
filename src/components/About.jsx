import React from 'react'
import styled from 'styled-components'

import WavingHand from '../images/waving_hand.png'

const About = () => (
  <article id="intro">
    <HandEmoji src={WavingHand} alt="Hand wave" />
    <TextContainer>
      <p>
        I'm Tomas, a software engineer{" "}
        <a href="https://www.wix.com/" alt="Wix.com" target="_blank" rel="external nofollow">@Wix</a>
        , working on big scale systems and keeping everyones code clean.
      </p>
      <p>
        I like learning about how big and complex systems are built, why they are built and how to keep them working.
        Also, experimenting with various technologies and languages, different paradigms and ways to make our code more readable and understandable.
      </p>
      <p>Besides the technical aspects, one of my main virtues is people, because without them, there would be no tech.</p>
      <p>Therefore, if you have some questions, don't be afraid to say hi!</p>
    </TextContainer>
  </article>
)

const HandEmoji = styled.img`
  height: 40px;
  width: 40px;
`;

const TextContainer = styled.section`
  max-width: 600px;
  line-height: 1.6;
`

export default About
