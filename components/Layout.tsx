import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled, {
  createGlobalStyle,
  keyframes,
  th,
  useColorMode,
} from '@xstyled/styled-components';
import { Seo } from './Seo';
import { SiteHeader } from './SiteHeader';

type Props = {
  children?: ReactNode;
  title?: string;
};

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
    height: 100%;
    position:relative;
  }

  body {  
    position: relative;
    min-height: 100%;
    height: 100%;
    width: 100%;
    margin: 0;
    font-size: 16px;
  }

  #__next {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  ul {
    padding-inline-start: 1rem;
  }

  li {
    margin: 1rem 0;
  }
`;

const gradientShift = keyframes`	
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  font-family: ${th.font('normal')}, 'Helvetica Neue', sans-serif;
  color: text;
  background-color: ${th.color('background')};

  animation: ${gradientShift} 30s ease infinite forwards;

  z-index: 0;

  ::before {
    content: '';
    z-index: -1;
    background-image: url(${p => p.background});
    background-attachment: fixed;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    pointer-events: none;
  }
`;

export const Layout = ({ children, title = 'Dean Bowler' }: Props) => {
  const [colorMode] = useColorMode();

  return (
    <>
      <Container
        background={colorMode === 'dark' ? '/background-inverse.svg' : '/background.svg'}
      >
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Seo title={title} />
        <SiteHeader />
        {children}
        <footer></footer>
      </Container>
      <GlobalStyle />
    </>
  );
};
