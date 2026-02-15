import Link from 'next/link'
import { Text, Box } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import { useMounted } from '../lib/use-mounted'

const Logo = () => {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()

  const textColor = mounted && resolvedTheme === 'dark'
    ? 'whiteAlpha.900'
    : 'gray.800'

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('home')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Link href="/" scroll={false} onClick={handleClick}>
      <Box
        as="span"
        fontWeight="bold"
        fontSize="18px"
        display="inline-flex"
        alignItems="center"
        h="30px"
        lineHeight="20px"
        p="10px"
        css={{
          '& img': { transition: '200ms ease' },
          '&:hover img': { transform: 'rotate(20deg)' },
        }}
      >
        <Text
          color={textColor}
          fontFamily='"M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Kenneth Erasga
        </Text>
      </Box>
    </Link>
  )
}

export default Logo
