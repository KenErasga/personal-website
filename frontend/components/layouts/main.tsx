import Head from 'next/head'
import NavBar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

interface MainProps {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Kenneth Erasga — Full-stack Software Engineer based in Manchester, UK. Specialising in Node.js, TypeScript, AWS, and cloud-native microservices."
        />
        <meta name="author" content="Kenneth Erasga" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#88ccca" />
        <link rel="canonical" href="https://kennetherasga.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kenneth Erasga — Software Engineer" />
        <meta
          property="og:description"
          content="Full-stack Software Engineer based in Manchester, UK. Specialising in Node.js, TypeScript, AWS, and cloud-native microservices."
        />
        <meta property="og:url" content="https://kennetherasga.com" />
        <meta property="og:site_name" content="Kenneth Erasga" />
        <meta property="og:locale" content="en_GB" />

        <title>Kenneth Erasga — Software Engineer</title>
      </Head>
      <NavBar />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
