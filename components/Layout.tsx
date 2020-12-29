import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled, {
  Box,
  createGlobalStyle,
  keyframes,
  th,
  useColorMode,
} from '@xstyled/styled-components';

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

  background: linear-gradient(
    -25deg,
    ${th.color('backgroundStart')},
    ${th.color('backgroundStop')},
    ${th.color('backgroundStopAlt')},
    ${th.color('backgroundStop')},
    ${th.color('backgroundStart')}
  );
  background-size: 500% 500%;

  font-family: ${th.font('normal')}, 'Helvetica Neue', sans-serif;
  color: text;

  animation: ${gradientShift} 20s ease infinite forwards;

  ::before {
    content: '';
    background-image: url(${p => p.background});
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    pointer-events: none;
  }
`;

export const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <Container
        background={colorMode === 'dark' ? '/background-inverse.svg' : '/background.svg'}
      >
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <header></header>
        {children}
        <footer></footer>
      </Container>
      <GlobalStyle />
    </>
  );
};
