import Head from 'next/head'
import type { NextRouter } from 'next/router'
import NavBar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

interface MainProps {
  children: React.ReactNode
  router: NextRouter
}

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ken's homepage" />
        <meta name="author" content="Ken Erasga" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <title>Ken Erasga - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
