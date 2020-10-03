import React from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'

import { Heading, Button } from '@chakra-ui/core'

const NotFoundPage = () => (
  <>
    <SEO title="404" />
    <Heading>:(</Heading>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">
      <Button my={5} w="100%" as="a"  aria-label="Go home">
        Go home
      </Button>
    </Link>
  </>
)

export default NotFoundPage
