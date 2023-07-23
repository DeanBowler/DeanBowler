import React from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

import { ColorModeProvider, ThemeProvider } from '@xstyled/styled-components';
import theme from '@/styled/theme';
import { SvgFilterDefinitions } from '@/components/SvgFilters';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <Component {...pageProps} key={router.route} />
          </ColorModeProvider>
          <SvgFilterDefinitions />
        </ThemeProvider>
      </QueryClientProvider>
      <Analytics />
    </>
  );
}
