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

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src="/Me2.jpg" width={30} height={30} alt="logo" style={{ borderRadius: '50%' }} />
        <Text
          color={textColor}
          fontFamily='"M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Ken Erasga
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
