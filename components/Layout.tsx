import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled, {
  createGlobalStyle,
  th,
  useColorMode,
  x,
} from '@xstyled/styled-components';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

import Spaced from '@/styled/Spaced';
import { Seo } from '@/components/Seo';
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
    line-height: 1.3;
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
  }

  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  ul li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
  }

  ul li::before {
    content: '▹';
    position: absolute;
    left: 0px;
    font-size: 3xl;
    color: primary;
  }
`;

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  includeFooter?: boolean;
}
export const Layout = ({
  children,
  title = 'Dean Bowler',
  includeFooter = true,
}: LayoutProps) => {
  const [colorMode] = useColorMode();

  return (
    <>
      <Container
        background={colorMode === 'dark' ? '/background-inverse.svg' : '/background.svg'}
      >
        <Head>
          <title>{title}</title>
        </Head>
        <Seo title={title} />
        <SiteHeader />
        {children}
        {includeFooter && (
          <x.footer mt={5}>
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
                    hoverColor="#0072b1"
                  >
                    <SiLinkedin />
                  </x.a>
                  <x.a
                    color="text"
                    aria-label="Twitter"
                    href="https://twitter.com/SpencerBatwickhttps://www.linkedin.com/in/dean-bowler-875a7323"
                    opacity={0.7}
                    hoverOpacity={1}
                    hoverColor="#1DA1F2"
                  >
                    <SiTwitter />
                  </x.a>
                </Spaced>
              </x.div>
            </x.div>
          </x.footer>
        )}
      </Container>
      <GlobalStyle />
    </>
  );
};
