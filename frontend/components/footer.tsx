import { Box, Container, Text, Flex, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box as="footer" py={6} opacity={0.6} fontSize="sm">
      <Container maxW="container.md">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={3}
        >
          <Text>&copy; {new Date().getFullYear()} Kenneth Erasga</Text>

          <Flex gap={4} align="center">
            <Link href="mailto:kenneth.erasga@gmail.com" aria-label="Email">
              <FaEnvelope />
            </Link>
            <Link href="https://www.linkedin.com/in/kenneth-erasga/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/kenerasga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </Link>
          </Flex>

          <Text>Built with Next.js &amp; Chakra UI</Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
