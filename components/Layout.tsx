import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled, {
  createGlobalStyle,
  keyframes,
  th,
  useColorMode,
  x,
} from '@xstyled/styled-components';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

import Spaced from '../styled/Spaced';
import { Seo } from './Seo';
import { SiteHeader } from './SiteHeader';

type Props = {
  children?: ReactNode;
  title?: string;
  includeFooter?: boolean;
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
  background-color: background;

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

export const Layout = ({
  children,
  title = 'Dean Bowler',
  includeFooter = true,
}: Props) => {
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
        {includeFooter && (
          <x.footer
            row
            my={3}
            mx={{ xs: 4, md: 6 }}
            justifyContent="space-between"
            alignItems="center"
            color="text"
          >
            <x.span>Dean Bowler © 2020</x.span>
            <x.div fontSize="2xl">
              <Spaced mx={2}>
                <x.a
                  color="text"
                  aria-label="GitHub"
                  href="https://github.com/DeanBowler"
                  opacity={0.7}
                  hoverOpacity={1}
                >
                  <SiGithub />
                </x.a>
                <x.a
                  color="text"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/dean-bowler-875a7323"
                  opacity={0.7}
                  hoverOpacity={1}
                >
                  <SiLinkedin />
                </x.a>
                <x.a
                  color="text"
                  aria-label="Twitter"
                  href="https://twitter.com/SpencerBatwickhttps://www.linkedin.com/in/dean-bowler-875a7323"
                  opacity={0.7}
                  hoverOpacity={1}
                >
                  <SiTwitter />
                </x.a>
              </Spaced>
            </x.div>
          </x.footer>
        )}
      </Container>
      <GlobalStyle />
    </>
  );
};
