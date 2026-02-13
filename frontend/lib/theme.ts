import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    body: {
      bg: { _light: '#f0e7db', _dark: '#202023' },
      color: { _light: 'gray.800', _dark: 'whiteAlpha.900' }
    }
  },
  theme: {
    tokens: {
      colors: {
        grassTeal: { value: '#88ccca' }
      },
      fonts: {
        heading: { value: "var(--font-m-plus-rounded), sans-serif" }
      }
    },
    semanticTokens: {
      colors: {
        linkColor: {
          value: { _light: '#3d7aed', _dark: '#ff63c3' }
        }
      }
    }
  }
})

const system = createSystem(defaultConfig, config)
export default system
