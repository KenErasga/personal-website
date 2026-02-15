import { Heading } from '@chakra-ui/react'

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
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

export default SectionTitle
