import React from 'react';
import {
  Box,
  Code,
  Heading,
  Kbd,
  Text,
  Divider,
  Link,
} from '@chakra-ui/react';
import CodeBlock from './Codeblock';

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my={10} {...props} />,
  h2: (props) => <Heading as="h2" fontWeight="medium" size="lg" my={15} {...props} />,
  h3: (props) => <Heading as="h3" size="md" fontWeight="medium" my={10} {...props} />,
  inlineCode: (props) => (
    <Code variantColor="yellow" {...props} />
  ),
  code: (props) => <CodeBlock {...props}/>,
  hr: (props) => <Divider my={4} w="100%" {...props} />,
  kbd: Kbd,
  a: (props) => <Link color="blue.500" {...props} />,
  br: (props) => <Box height="24px" {...props} />,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
};

export default MDXComponents;