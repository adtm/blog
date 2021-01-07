import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Flex, Stack } from '@chakra-ui/react'

const Container = ({ children }) => (
    <Flex
        w="100%"
        flexDirection="column"
        alignItems="center"
        maxWidth={700}
        m="2rem auto 4rem auto"
        paddingLeft={5}
        paddingRight={5}
    >
        <Header />
        <Stack my={10} >
            {children}
        </Stack>
        <Footer />
    </Flex>
)

export default Container