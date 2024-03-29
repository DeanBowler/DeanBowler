import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled, {
  createGlobalStyle,
  th,
  useColorMode,
  x,
} from '@xstyled/styled-components';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

import { Seo, SeoProps } from '@/components/Seo';
import { SiteHeader } from '@/components/SiteHeader';
import { NowPlaying } from '@/components/NowPlaying';

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
    height: 100%;
    position:relative;
    scroll-behavior: smooth;
  }

  body {  
    position: relative;
    min-height: 100%;
    height: 100%;
    width: 100%;
    margin: 0;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.3;
    background-color: background;
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
    margin: 0.5rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: heading;
  }
`;

const Container = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  font-family: ${th.font('normal')}, 'Helvetica Neue', sans-serif;
  color: text;
  background-color: background;

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
    opacity: 0.75;
  }

  ul {
    padding: 0px;
    padding-left: 24;
    margin: 0px;
  }

  ul li {
    position: relative;
    margin-bottom: 0.5rem;
  }

  ul li::marker {
    color: text-a50;
    font-size: x-large;
  }
`;

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  seo?: SeoProps;
  forceHeaderBg?: 'dark' | 'default' | boolean;
  includeFooter?: boolean;
}

export const Layout = ({
  children,
  title = 'Dean Bowler',
  forceHeaderBg = false,
  includeFooter = true,
  seo,
}: LayoutProps) => {
  const [colorMode] = useColorMode();

  const shouldForceHeaderBg = forceHeaderBg === true || colorMode === forceHeaderBg;

  return (
    <>
      <Container
        background={colorMode === 'dark' ? '/background-inverse.svg' : '/background.svg'}
      >
        <Head>
          <title>{title}</title>
        </Head>
        <Seo title={title} {...seo} />
        <SiteHeader forceHeaderBg={shouldForceHeaderBg} />
        {children}
        {includeFooter && (
          <x.footer mt={5} fontFamily="heading">
            <x.div row my={3} mx={{ xs: 4, md: 6 }} justifyContent="center">
              <NowPlaying />
            </x.div>
            <x.div
              row
              my={3}
              mx={{ xs: 4, md: 6 }}
              justifyContent="space-between"
              alignItems="center"
              color="text"
            >
              <x.span>Dean Bowler © 2020</x.span>
              <x.div fontSize="2xl">
                <x.a
                  color="text"
                  aria-label="GitHub"
                  href="https://github.com/DeanBowler"
                  opacity={{ _: 0.7, hover: 1 }}
                  mx={2}
                >
                  <SiGithub />
                </x.a>
                <x.a
                  color={{ _: 'text', hover: '#0072b1' }}
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/dean-bowler-875a7323"
                  opacity={{ _: 0.7, hover: 1 }}
                  mx={2}
                >
                  <SiLinkedin />
                </x.a>
                <x.a
                  color={{ _: 'text', hover: '#1DA1F2' }}
                  aria-label="Twitter"
                  href="https://twitter.com/SpencerBatwickhttps://www.linkedin.com/in/dean-bowler-875a7323"
                  opacity={{ _: 0.7, hover: 1 }}
                  mx={2}
                >
                  <SiTwitter />
                </x.a>
              </x.div>
            </x.div>
          </x.footer>
        )}
      </Container>
      <GlobalStyle />
    </>
  );
};
