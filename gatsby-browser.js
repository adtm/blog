import React from "react"
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core"
import { MDXProvider } from '@mdx-js/react';

import theme from "./src/gatsby-plugin-chakra-ui/theme"
import MDXComponents from "./src/components/MDXComponent";

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
    <MDXProvider components={MDXComponents}>
      <ColorModeProvider value="light">
        <CSSReset />
        {element}
      </ColorModeProvider>
    </MDXProvider>
  </ThemeProvider>
)