import React from 'react'
import { Link } from 'gatsby'
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/core';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      maxWidth={700}
      width="100%"
      as="nav"
      mx="auto"
      mb={10}
      height={100}
    >
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === 'dark' ? 'sun' : 'moon'}
        onClick={toggleColorMode}
      />
      <Box>
        <Link to="/">
          <Button fontWeight={400} as="a" variant="ghost" p={[1, 4]} aria-label="About">
            About
          </Button>
        </Link>
        <Link to="/blog">
          <Button fontWeight={400} as="a" variant="ghost" p={[1, 4]} aria-label="Blog">
            Blog
          </Button>
        </Link>
      </Box>
    </Flex>
  )
}


export default Header
