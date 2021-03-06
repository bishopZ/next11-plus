import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static render() {
    return (
      <Html lang="en-us">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
