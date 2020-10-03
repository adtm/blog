import React, { useState, useRef } from 'react';
import {
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Button,
  Text,
  useToast,
  useColorMode
} from '@chakra-ui/core';
import subscribeFn from './subscribeFn'


const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const toast = useToast();
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900'
  };
  const borderColor = {
    light: 'blue.300',
    dark: 'blue.900'
  };

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(inputEl.current.value)
    const { error } = await subscribeFn({
      body: {
        email: inputEl.current.value
      },
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }

    inputEl.current.value = '';
    toast({
      title: 'Yes!',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={5}
      padding={6}
      my={10}

    >
      <Heading as="h5" size="lg" mb={2}>
        Subscribe to the newsletter
      </Heading>
      <Text>
        Receive emails about software engineering, technology and other future updates
      </Text>
      <InputGroup size="md" mt={4}>
        <Input
          aria-label="Email for newsletter"
          placeholder="larry@google.com"
          ref={inputEl}
          type="email"
        />
        <InputRightElement width="8rem">
          <Button
            isLoading={loading}
            fontWeight="bold"
            h="1.75rem"
            size="sm"
            onClick={subscribe}
          >
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Subscribe;
