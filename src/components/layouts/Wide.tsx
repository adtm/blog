import React from "react"
import { Flex } from "@chakra-ui/react"

interface Props {
  children: React.ReactNode
  styles?: Record<string, any>
}

const WideLayout = ({ children, styles }: Props) => (
  <Flex px={{ base: 5, md: 20, lg: 40 }} flexDirection="column" {...styles}>
    {children}
  </Flex>
)

export default WideLayout
