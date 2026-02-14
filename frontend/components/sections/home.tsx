import Image from 'next/image'
import {
  Heading,
  Text,
  Box,
  Flex,
  Badge,
  Button
} from '@chakra-ui/react'
import Head from 'next/dist/shared/lib/head'
import { motion } from 'motion/react'
import { FaChevronDown } from 'react-icons/fa'

const SectionTitle = ({ children }) => (
  <Heading
    as="h2"
    fontSize="xl"
    textDecoration="underline"
    textUnderlineOffset="6px"
    textDecorationColor="#525252"
    textDecorationThickness="4px"
    mb={4}
  >
    {children}
  </Heading>
)

const TechBadge = ({ children }) => (
  <Badge
    colorPalette="teal"
    px={2}
    py={1}
    fontSize="sm"
    transition="all 0.2s"
    _hover={{ transform: 'scale(1.1)', boxShadow: '0 0 8px rgba(136, 204, 202, 0.5)' }}
    cursor="default"
  >
    {children}
  </Badge>
)

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const HomeSection = () => {
  return (
    <Box id="home" as="section" position="relative" scrollMarginTop="200px">
      <Head>
        <title>Kenneth Erasga - Software Engineer</title>
        <meta
          name="description"
          content="Kenneth Erasga - Full-Stack Software Engineer based in Manchester, UK"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Box pt={6}>
        <Flex align="center" gap={6} mb={6} wrap="wrap">
          <Box position="relative">
            <Box
              position="absolute"
              top="-10px"
              left="-10px"
              right="-10px"
              bottom="-10px"
              borderRadius="50%"
              bg="linear-gradient(135deg, rgba(136, 204, 202, 0.3), rgba(136, 204, 202, 0.05))"
              filter="blur(8px)"
            />
            <Image
              src="/Me2.jpg"
              alt="Kenneth Erasga"
              width={160}
              height={160}
              style={{ borderRadius: '50%', objectFit: 'cover', position: 'relative' }}
              priority
            />
          </Box>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading as="h1" fontSize="3xl">
                Hi, I&apos;m Ken
                <motion.span
                  style={{ display: 'inline-block', marginLeft: '8px' }}
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
                >
                  👋
                </motion.span>
              </Heading>
            </motion.div>
            <Text fontSize="md" color="gray.500">
              Software Engineer &middot; Manchester, UK
            </Text>
          </Box>
        </Flex>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Text mb={4} fontSize="lg" fontWeight="medium">
            I build because I love solving problems and making things better.
          </Text>
        </motion.div>

        <Text mb={6}>
          I&apos;m a Software Engineer with a strong focus on backend development,
          particularly in Node.js and TypeScript. Comfortable working across
          microservices, cloud infrastructure, and frontend frameworks, with a
          consistent focus on clean architecture, testing, and shipping reliable
          solutions.
        </Text>

        <Flex gap={3} mb={8}>
          <Button
            size="sm"
            variant="outline"
            borderColor="grassTeal"
            color="grassTeal"
            _hover={{ bg: 'grassTeal', color: '#202023' }}
            onClick={() => scrollTo('experience')}
          >
            See my experience
          </Button>
          <Button
            size="sm"
            variant="outline"
            borderColor="grassTeal"
            color="grassTeal"
            _hover={{ bg: 'grassTeal', color: '#202023' }}
            onClick={() => scrollTo('contacts')}
          >
            Get in touch
          </Button>
        </Flex>

        <Box pt={4}>
          <SectionTitle>Core Tech</SectionTitle>
          <Flex flexWrap="wrap" gap={2} mb={6}>
            {[
              'TypeScript',
              'Node.js',
              'Next.js',
              'NestJS',
              'AWS',
              'Docker',
            ].map(tech => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </Flex>
        </Box>
      </Box>

      <Box
        position="absolute"
        bottom="-40px"
        left="50%"
        transform="translateX(-50%)"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ cursor: 'pointer', opacity: 0.4 }}
          onClick={() => scrollTo('experience')}
        >
          <FaChevronDown size={20} />
        </motion.div>
      </Box>
    </Box>
  )
}

export default HomeSection
