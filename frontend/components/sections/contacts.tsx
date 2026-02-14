import {
  Heading,
  Box,
  Link,
  Text,
  SimpleGrid,
  Badge,
  Flex
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

const ContactCard = ({ href, icon: Icon, label, badge, target }: {
  href: string
  icon: React.ElementType
  label: string
  badge?: string
  target?: string
}) => (
  <Link
    href={href}
    target={target}
    display="flex"
    alignItems="center"
    gap={4}
    p={5}
    borderWidth="1px"
    borderRadius="lg"
    transition="all 0.2s"
    _hover={{ transform: 'scale(1.03)', bg: 'grassTeal', color: '#202023', textDecoration: 'none' }}
  >
    <Box fontSize="28px">
      <Icon />
    </Box>
    <Box>
      <Flex align="center" gap={2}>
        <Text fontWeight="semibold">{label}</Text>
        {badge && (
          <Badge colorPalette="teal" fontSize="xs">{badge}</Badge>
        )}
      </Flex>
    </Box>
  </Link>
)

const ContactsSection = () => {
  return (
    <Box id="contacts" as="section">
      <Box pt={6}>
        <Heading as="h2" fontSize="3xl" mb={4}>
          Contact
        </Heading>
        <Text mb={2}>
          Feel free to reach out through any of the channels below.
        </Text>
        <Text mb={6} fontSize="sm" color="gray.500">
          Based in Manchester, UK (GMT)
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        <ContactCard
          href="mailto:kenneth.erasga@gmail.com"
          icon={FaEnvelope}
          label="kenneth.erasga@gmail.com"
          badge="Preferred"
        />
        <ContactCard
          href="https://www.linkedin.com/in/kenneth-erasga/"
          icon={FaLinkedin}
          label="LinkedIn"
          target="_blank"
        />
        <ContactCard
          href="https://github.com/kenerasga"
          icon={FaGithub}
          label="GitHub"
          target="_blank"
        />
        <ContactCard
          href="https://www.instagram.com/kenerasga/"
          icon={FaInstagram}
          label="Instagram"
          target="_blank"
        />
      </SimpleGrid>
    </Box>
  )
}

export default ContactsSection
