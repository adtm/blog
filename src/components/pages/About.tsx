import React from "react"
import { Text, Link, Heading, Box } from "@chakra-ui/react"
import WideLayout from "../layouts/Wide"

import "../../styles/global.styles.css"

const About = () => (
  <WideLayout
    styles={{
      top: "50%",
      position: "absolute",
      justifyContent: "center",
      transform: "translate(0%, -50%)",
      zIndex: 10,
    }}
  >
    <Box ml={{ base: 0, sm: 0, lg: 0 }}>
      <Heading
        as="h2"
        fontSize={{ base: 30, md: 30, lg: 40 }}
        fontWeight={400}
        pb={{ base: 10, md: 5 }}
        letterSpacing={1}
        lineHeight={{ base: 1.3, sm: 1.6 }}
        maxW={800}
      >
        <Text>
          👋 Software engineer passionate about crafting products that change
          people lives.
        </Text>
      </Heading>

      <Text>
        My primary focus is on big-scale systems, constant little improvements
        and people.
      </Text>
      <Text pt={1}>
        Currently at{" "}
        <Link
          href="https://www.wix.com/velo"
          target="_blank"
          rel="noreferrer"
          color="blue.500"
        >
          Wix.com
        </Link>
      </Text>
    </Box>

  </WideLayout>
)

export default About
