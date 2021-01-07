import React from 'react'
import { Link } from 'gatsby'
import { useColorMode, Button, Flex, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      maxWidth={700}
      width="100%"
      as="nav"
      mb={10}
      height={100}
    >
      <IconButton onClick={toggleColorMode} aria-label="Toggle dark mode" >
        {
          colorMode === 'dark' ?
            <SunIcon /> :
            <MoonIcon />

        }
      </IconButton>

      <div>
        <Link to="/">
          <Button fontWeight={400} variant="ghost" aria-label="About">
            About
          </Button>
        </Link>
        <Link to="/blog">
          <Button fontWeight={400} variant="ghost" aria-label="Blog">
            Blog
          </Button>
        </Link>
      </div>
    </Flex>
  )
}


export default Header
