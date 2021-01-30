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
    }}
  >
    <Box ml={{ base: 0, sm: 0, lg: 0 }}>
      <Heading
        as="h2"
        fontSize={{ base: "40px", md: "45px", lg: "55px" }}
        fontWeight={400}
        pb={{ base: 10, md: 5 }}
        letterSpacing={1}
        lineHeight={1.6}
        maxW={1000}
      >
        <Text>
          Software engineer passionate about creating products that change
          people lives.
        </Text>
      </Heading>

      <Text>
        My primary focus is big-scale systems, constant little improvements and
        people.
      </Text>
      <Text pt={1}>
        Currently{" "}
        <Link
          href="https://wix.com"
          target="_blank"
          rel="noreferrer"
          color="blue.500"
        >
          @Wix
        </Link>
      </Text>
    </Box>
  </WideLayout>
)

export default About
