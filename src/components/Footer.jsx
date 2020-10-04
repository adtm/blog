import React from 'react';

import { Flex, Link, IconButton } from '@chakra-ui/core';
import { useColorMode } from "@chakra-ui/color-mode"

const Footer = () => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'gray.900',
    dark: 'white'
  };

  return (
    <Flex align="center" mb={4} direction="column">
      <div>
        <Link href="mailto:tomas.eglinskas@gmail.com" title="Email" isExternal>
          <IconButton
            aria-label="Email"
            icon="mail"
            size="lg"
            color={bgColor[colorMode]}
            variant="ghost"
          />
        </Link>
        <Link href="https://github.com/adtm" title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            icon="github"
            size="lg"
            color={bgColor[colorMode]}
            variant="ghost"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tomas-eglinskas"
          title="LinkedIn"
          isExternal
        >
          <IconButton
            aria-label="LinkedIn"
            icon="linkedin"
            size="lg"
            color={bgColor[colorMode]}
            variant="ghost"
          />
        </Link>
        <Link href="https://twitter.com/tomas_eglinskas" title="Twitter" isExternal>
          <IconButton
            aria-label="Twitter"
            icon="twitter"
            size="lg"
            color={bgColor[colorMode]}
            variant="ghost"
          />
        </Link>
      </div>
    </Flex>
  );
}


export default Footer;
