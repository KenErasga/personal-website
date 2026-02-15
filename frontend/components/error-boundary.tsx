import { Component } from 'react'
import { Box, Heading, Text, Button, Container } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container maxW="container.md" pt={20}>
          <Box textAlign="center" py={10}>
            <Heading as="h1" fontSize="2xl" mb={4}>
              Something went wrong
            </Heading>
            <Text mb={6} color="gray.500">
              An unexpected error occurred. Please try refreshing the page.
            </Text>
            <Button
              colorPalette="teal"
              onClick={() => {
                this.setState({ hasError: false })
                window.location.reload()
              }}
            >
              Refresh page
            </Button>
          </Box>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
