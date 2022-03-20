import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ken's homepage" />
        <meta name="author" content="Ken Erasga" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <title>Ken Erasga - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>

        {children}
      </Container>
    </Box>
  )
}

export default Main