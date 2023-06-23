import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Home = () => (
  <>
    <Head>
      <title>Picou</title>
      <meta name="description" content="Picou website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo192" />
    </Head>
    <body>
      <Link href='/content/projets-picou'>Glossaire</Link>
    </body>

  </>
)

export default Home