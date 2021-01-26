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
        <Head>{getColorModeInitScriptElement()}</Head>
        <body className="xstyled-color-mode-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
