import Logo from './logo'
import NextLink from 'next/link'
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

// Chakra v3 Menu compound component types are incompatible with React 19
const NavMenu: Record<string, React.FC<any>> = Menu as any

interface LinkItemProps {
  href: string
  path: string
  target?: string
  children: React.ReactNode
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
  const active = path === href
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  const inactiveColor = mounted && resolvedTheme === 'dark'
    ? 'whiteAlpha.900'
    : 'gray.800'

  return (
    <Link
      asChild
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      <NextLink href={href} scroll={false}>
        {children}
      </NextLink>
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

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/contacts" path={path}>
            Contacts
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
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
                <NavMenu.Item value="about" asChild>
                  <NextLink href="/">About</NextLink>
                </NavMenu.Item>
                <NavMenu.Item value="contacts" asChild>
                  <NextLink href="/contacts">Contacts</NextLink>
                </NavMenu.Item>
              </NavMenu.Content>
            </NavMenu.Root>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
