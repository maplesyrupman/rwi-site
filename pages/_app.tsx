import Script from 'next/script'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/reset.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy='afterInteractive'
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HN4BPT8NKL"
      />
      <Script strategy='afterInteractive' id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

           gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp
