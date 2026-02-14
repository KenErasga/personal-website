import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import Chakra from '../components/chakra'
import { useActiveSection } from '../lib/use-active-section'
import { ActiveSectionContext } from '../lib/active-section-context'

function Website({ Component, pageProps, router }: AppProps) {
  const activeSection = useActiveSection()

  return (
    <Chakra>
      <Fonts />
      <ActiveSectionContext.Provider value={activeSection}>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </ActiveSectionContext.Provider>
    </Chakra>
  )
}

export default Website
