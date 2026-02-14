import Logo from './logo'
import { useContext, useCallback } from 'react'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  IconButton
} from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import { useMounted } from '../lib/use-mounted'
import { FaBars } from 'react-icons/fa'
import ThemeToggleButton from './theme-toggle-button'
import { ActiveSectionContext } from '../lib/active-section-context'

// Chakra v3 Menu compound component types are incompatible with React 19
const NavMenu: Record<string, React.FC<any>> = Menu as any

interface LinkItemProps {
  href: string
  sectionId: string
  children: React.ReactNode
}

const LinkItem = ({ href, sectionId, children, ...props }: LinkItemProps) => {
  const activeSection = useContext(ActiveSectionContext)
  const active = activeSection === sectionId
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  const inactiveColor = mounted && resolvedTheme === 'dark'
    ? 'whiteAlpha.900'
    : 'gray.800'

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [sectionId])

  return (
    <Link
      href={href}
      onClick={handleClick}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      {...props}
    >
      {children}
    </Link>
  )
}

interface NavbarProps {
  path: string
  [key: string]: unknown
}

const Navbar = ({ path, ...props }: NavbarProps) => {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  const navBg = mounted && resolvedTheme === 'dark'
    ? '#20202380'
    : '#ffffff40'

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={navBg}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1} />

        <Flex align="center">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            gap={4}
            mr={2}
          >
            <LinkItem href="#experience" sectionId="experience">
              Experience
            </LinkItem>
            <LinkItem href="#contacts" sectionId="contacts">
              Contact
            </LinkItem>
          </Stack>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <NavMenu.Root>
              <NavMenu.Trigger
                aria-label="Options"
                p={1}
                borderWidth="1px"
                borderRadius="md"
                bg="transparent"
                cursor="pointer"
              >
                <FaBars />
              </NavMenu.Trigger>
              <NavMenu.Content>
                <NavMenu.Item value="about" onClick={() => scrollTo('home')}>
                  About
                </NavMenu.Item>
                <NavMenu.Item value="experience" onClick={() => scrollTo('experience')}>
                  Experience
                </NavMenu.Item>
                <NavMenu.Item value="contacts" onClick={() => scrollTo('contacts')}>
                  Contact
                </NavMenu.Item>
              </NavMenu.Content>
            </NavMenu.Root>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
