import React from 'react';

import styled, { Box, th } from '@xstyled/styled-components';
import Link from 'next/link';

import { ABBERATION_FILTER } from './SvgFilters';
import { DarkModeToggle } from './DarkModeToggle';

const Header = styled.headerBox`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${th.space(5)};
  z-index: 1;
  color: ${th.color('white')};
  align-items: center;
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
  return (
    <Header>
      <Box px={3}>{process.env.NODE_ENV === 'development' && <DarkModeToggle />}</Box>
      {process.env.NODE_ENV === 'development' && (
        <Box px={3}>
          <Link href="/" passHref>
            <StyledLink fontSize={{ xs: 'lg', md: 'xl' }}>About</StyledLink>
          </Link>
          <Link href="/blog" passHref>
            <StyledLink fontSize={{ xs: 'lg', md: 'xl' }} mx={4}>
              Blog
            </StyledLink>
          </Link>
        </Box>
      )}
    </Header>
  );
}
