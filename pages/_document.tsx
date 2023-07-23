import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import {
  getColorModeInitScriptElement,
  ServerStyleSheet,
} from '@xstyled/styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {getColorModeInitScriptElement()}
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="xstyled-color-mode-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
