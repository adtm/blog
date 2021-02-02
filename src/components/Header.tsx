import React from "react"
import { Link } from "gatsby"
import { useColorMode, Button, Heading, ButtonGroup } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

import WideLayout from "./layouts/Wide"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <WideLayout
      styles={{
        as: "nav",
        mt: 10,
        w: "100%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Heading
        as="h1"
        fontSize={{ base: 10, sm: 12, md: 18 }}
        letterSpacing={1}
        fontWeight={400}
      >
        <Link to="/">
         
          Tomas Eglinskas
          
          </Link>
      </Heading>

      <ButtonGroup
        colorScheme="black"
        variant="link"
        spacing={{ base: 5, md: 10 }}
      >
        <Link to="/">
          <Button
            fontSize={{ base: 10, sm: 12, md: 18 }}
            fontWeight={400}
            aria-label="About"
          >
            About
          </Button>
        </Link>
        <Link to="/blog">
          <Button
            fontSize={{ base: 10, sm: 12, md: 18 }}
            fontWeight={400}
            aria-label="Journal"
          >
            Journal
          </Button>
        </Link>
      </ButtonGroup>
    </WideLayout>
  )
}

export default Header
