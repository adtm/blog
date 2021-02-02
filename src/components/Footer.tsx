import React from "react"
import { Text, Link, ButtonGroup } from "@chakra-ui/react"
import WideLayout from "./layouts/Wide"

interface TextLinkProps {
  name: string
  href: string
}

const TextLink = ({ name, href }: TextLinkProps) => (
  <Link href={href} title={name} isExternal>
    <Text as="h3" fontWeight={40} fontSize={{ base: 12, md: 14 }}>
      {name}
    </Text>
  </Link>
)

const Footer = () => (
  <WideLayout styles={{ position: "absolute", bottom: 10, right: 0 }}>
    <ButtonGroup
      spacing={{ base: 5, md: 10 }}
      w="100%"
      justifyContent="flex-end"
    >
      <TextLink name="Email" href="mailto:tomas.eglinskas@gmail.com" />
      <TextLink
        name="LinkedIn"
        href="https://www.linkedin.com/in/tomas-eglinskas"
      />
      <TextLink name="Github" href="https://github.com/adtm" />
      <TextLink name="Twitter" href="https://twitter.com/tomas_eglinskas" />
    </ButtonGroup>
  </WideLayout>
)

export default Footer
