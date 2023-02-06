import '../styles/globals.css'
import "nes.css/css/nes.min.css";
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head'
import { AppWrapper } from '../context/context'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Pokemon Guesser</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </QueryClientProvider>
  )
}

export default MyApp
