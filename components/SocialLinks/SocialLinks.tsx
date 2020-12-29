import styled, { Box } from '@xstyled/styled-components';
import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import Spaced from '../../styled/Spaced';
import { ABBERATION_FILTER } from '../SvgFilters';

interface SocialLinkProps {
  icon: IconType;
  link: string;
  className?: string;
}

const LinkContainer = styled.a`
  display: inline-block;
  color: white;
  padding: 1;

  :focus {
    outline: none;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 5px;
  }

  :hover {
    filter: url(#${ABBERATION_FILTER});
  }
`;

const SocialLink = ({ icon: SocialIcon, link, className }: SocialLinkProps) => (
  <LinkContainer as="a" href={link} className={className}>
    <SocialIcon size="2rem" />
  </LinkContainer>
);

export const SocialLinks = () => (
  <Box margin={4}>
    <Spaced mx={1}>
      <SocialLink icon={FiGithub} link="https://github.com/DeanBowler" />
      <SocialLink
        icon={FiLinkedin}
        link="https://www.linkedin.com/in/dean-bowler-875a7323"
      />
      <SocialLink icon={FiTwitter} link="https://twitter.com/SpencerBatwick" />
    </Spaced>
  </Box>
);
