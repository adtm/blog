import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { ColorModeProvider } from "@chakra-ui/color-mode"

import theme from "./src/gatsy-plugin-chakra-ui/theme"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
    `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
)