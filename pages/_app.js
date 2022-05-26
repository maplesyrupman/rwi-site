import Script from 'next/script'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='afterInteractive'
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
