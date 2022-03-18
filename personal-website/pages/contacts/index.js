import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Contacts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ken Erasga</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contacts
        </h1>

        <p className={styles.description}>
        TESTING
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Contacts
