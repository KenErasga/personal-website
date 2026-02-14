import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import { useMounted } from '../lib/use-mounted'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

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
      <LogoBox>
        <Text
          color={textColor}
          fontFamily='"M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Kenneth Erasga
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
