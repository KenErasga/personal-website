import {
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'

const Home = () => {
  return (
    <Container className='' >
      <Heading as="h1">
        <title>Ken Erasga</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Heading>
      <Text> Ken Erasga </Text>
      <Text> Welcome to my website </Text>
    </Container>
  )
}

export default Home