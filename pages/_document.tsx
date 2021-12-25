import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-145399538-1', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
    </body>
  </Html>
)

export default Document
