import Head from 'next/head'

import Home from '../components/Home'

const Index = () => (
  <>
    <Head>
      <title>jeagdb website</title>
      <meta name="description" content="jeagdb website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo192" />
    </Head>
    <Home />
  </>
)

export default Index