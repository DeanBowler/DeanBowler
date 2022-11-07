import React from 'react';

import { NextComponentType, NextPageContext } from 'next';
import { AppInitialProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ColorModeProvider, ThemeProvider } from '@xstyled/styled-components';
import theme from '@/styled/theme';
import { SvgFilterDefinitions } from '@/components/SvgFilters';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps,
}: AppInitialProps & {
  Component: NextComponentType<NextPageContext, unknown, Record<string, unknown>>;
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <Component {...pageProps} key={router.route} />
          </ColorModeProvider>
          <SvgFilterDefinitions />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
