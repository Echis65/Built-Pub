import { Html, Head, Main, NextScript } from 'next/document'
const Document = () => {
  return (
    <Html lang="en">
      <Head>
          <link href="https://fonts.cdnfonts.com/css/circular-std" rel="stylesheet"/>
          {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document