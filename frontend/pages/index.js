import {
  Heading,
  Text,
  Container,
  Divider,
} from '@chakra-ui/react'

const Home = () => {
  return (
    <Container>
      <Heading as="h1">
        <title>Ken Erasga</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Heading>
      <Text>  Ken Erasga</Text>
      <Divider my={6} />
      <Text> Welcome to my website</Text>
    </Container>
  )
}

export default Home