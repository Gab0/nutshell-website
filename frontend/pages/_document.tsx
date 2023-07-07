import { Html, Head, Main, NextScript } from 'next/document'

import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>

        <Main />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-95KZT4C932" strategy="lazyOnload" />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-95KZT4C932');
        `}
     </Script>
        <NextScript />
      </body>
    </Html>
  )
}
