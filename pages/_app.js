import Head from 'next/head'
import '../styles/globals.css'
import Header from './header'

import "../styles/banner.css"

function MyApp({ Component, pageProps }) {
  return (
    <>

  <Head>

    <link rel='icon' src='/logo.svg' />

  </Head>


  <Header />

<Component {...pageProps} />


    </>
  )
}

export default MyApp
