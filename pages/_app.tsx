import Script from 'next/script'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import '../styles/globals.css'
import '../styles/reset.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
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
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
