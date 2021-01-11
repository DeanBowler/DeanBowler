import React from 'react';

import styled, { Box, th, css } from '@xstyled/styled-components';
import Link from 'next/link';

import { ABBERATION_FILTER } from './SvgFilters';
import { DarkModeToggle } from './DarkModeToggle';
import { ScrollDirection, useWindowScroll } from '@/hooks/useWindowScroll';
import { gradientShift } from '@/styled/keyframes';

const BACKGROUND_GRADIENT_ONE = '#31364e';
const BACKGROUND_GRADIENT_TWO = '#5a3636';
const BACKGROUND_GRADIENT_THREE = '#5a3c58';

interface StyledHeaderProps {
  scrollDirection: ScrollDirection;
  scrolledTop: boolean;
}

const Header = styled.headerBox<StyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  position: ${({ scrolledTop }) => (!scrolledTop ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  width: 100%;
  height: ${th.size(4)};
  z-index: 1;
  color: ${th.color('white')};
  transform: translateY(0);
  ${props =>
    !props.scrolledTop &&
    props.scrollDirection !== 'UP' &&
    css`
      transform: translateY(-${(props.theme.sizes as string[])[4]});
    `};

  transition: transform ease-in-out 300ms;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: ${({ scrolledTop }) => (scrolledTop ? 0 : 1)};
    background: linear-gradient(
      -25deg,
      ${BACKGROUND_GRADIENT_ONE},
      ${BACKGROUND_GRADIENT_TWO},
      ${BACKGROUND_GRADIENT_THREE},
      ${BACKGROUND_GRADIENT_TWO},
      ${BACKGROUND_GRADIENT_ONE}
    );
    background-size: 500% 500%;
    animation: ${gradientShift} 30s ease infinite forwards;
  }

  ::after {
    content: '';
    background-image: url(/background-header.svg);
    background-attachment: fixed;
    opacity: ${({ scrolledTop }) => (scrolledTop ? 0 : 1)};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    pointer-events: none;
  }
`;

const StyledLink = styled.aBox`
  color: ${th.color('white')};
  text-decoration: none;
  opacity: 0.85;

  :hover {
    opacity: 1;
    filter: url(#${ABBERATION_FILTER});
  }
`;

export function SiteHeader() {
  const { scrollDirection, scrolledTop } = useWindowScroll();

  return (
    <Header {...{ scrollDirection, scrolledTop }}>
      <Box px={{ xs: 3, sm: 4 }}>
        {process.env.NODE_ENV === 'development' && <DarkModeToggle />}
      </Box>
      {process.env.NODE_ENV === 'development' && (
        <Box px={{ xs: 2, sm: 3 }}>
          <Link href="/" passHref>
            <StyledLink fontSize={{ xs: 'lg', sm: 'xl' }} mx={3}>
              About
            </StyledLink>
          </Link>
          <Link href="/#experience" passHref>
            <StyledLink fontSize={{ xs: 'lg', sm: 'xl' }} mx={3}>
              Experience
            </StyledLink>
          </Link>
          <Link href="/blog" passHref>
            <StyledLink fontSize={{ xs: 'lg', sm: 'xl' }} mx={3}>
              Blog
            </StyledLink>
          </Link>
        </Box>
      )}
    </Header>
  );
}
