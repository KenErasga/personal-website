import {
  Container,
  Heading,
  Box,
  Link,
  List,
  Text
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contacts = () => {
  return (
    <Container>
      <Box pt={6}>
        <Heading as="h1" fontSize="3xl" mb={4}>
          Contacts
        </Heading>
        <Text mb={6}>
          Feel free to reach out through any of the channels below.
        </Text>
      </Box>

      <List.Root gap={4} variant="plain">
        <List.Item>
          <Link
            href="mailto:kenneth.erasga@gmail.com"
            display="inline-flex"
            alignItems="center"
            gap={2}
            color="linkColor"
          >
            <FaEnvelope />
            kenneth.erasga@gmail.com
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href="tel:+447528287751"
            display="inline-flex"
            alignItems="center"
            gap={2}
            color="linkColor"
          >
            <FaPhone />
            (+44) 7528287751
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href="https://www.linkedin.com/in/kenneth-erasga/"
            target="_blank"
            display="inline-flex"
            alignItems="center"
            gap={2}
            color="linkColor"
          >
            <FaLinkedin />
            LinkedIn
          </Link>
        </List.Item>
        <List.Item>
          <Link
            href="https://github.com/kenerasga"
            target="_blank"
            display="inline-flex"
            alignItems="center"
            gap={2}
            color="linkColor"
          >
            <FaGithub />
            GitHub
          </Link>
        </List.Item>
      </List.Root>
    </Container>
  )
}

export default Contacts
