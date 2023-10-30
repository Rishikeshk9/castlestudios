import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Tag Manager code */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11391635567"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11391635567');
              `,
          }}
        />
        {/* End of Google Tag Manager code */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
