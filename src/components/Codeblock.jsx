import React from 'react'
import { Box, useColorMode } from '@chakra-ui/react';
import Highlight, { defaultProps } from "prism-react-renderer";

import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import github from 'prism-react-renderer/themes/github';

const CodeBlock = (props) => {

  const codeThemes = {
    dark: github,
    light: duotoneDark
  }

  const { colorMode } = useColorMode();

  return (
    <Box my={5} >
      <Highlight {...defaultProps} theme={codeThemes[colorMode]} code={props.children} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: 8, borderRadius: 5 }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  )
}

export default CodeBlock;