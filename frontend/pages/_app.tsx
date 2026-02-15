import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import { mPlusRounded } from '../components/fonts'
import Chakra from '../components/chakra'
import ErrorBoundary from '../components/error-boundary'
import { useActiveSection } from '../lib/use-active-section'
import { ActiveSectionContext } from '../lib/active-section-context'

function Website({ Component, pageProps }: AppProps) {
  const activeSection = useActiveSection()

  return (
    <div className={mPlusRounded.variable}>
      <Chakra>
        <ErrorBoundary>
          <ActiveSectionContext.Provider value={activeSection}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ActiveSectionContext.Provider>
        </ErrorBoundary>
      </Chakra>
    </div>
  )
}

export default Website
