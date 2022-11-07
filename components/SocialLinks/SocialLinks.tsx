import styled, { x } from '@xstyled/styled-components';
import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import Spaced from '@/styled/Spaced';
import { ABBERATION_FILTER } from '@/components/SvgFilters';

interface SocialLinkProps {
  icon: IconType;
  link: string;
  label: string;
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

const SocialLink = ({ icon: SocialIcon, link, label, className }: SocialLinkProps) => (
  <LinkContainer href={link} className={className} aria-label={label}>
    <SocialIcon size="2rem" />
  </LinkContainer>
);

export const SocialLinks = () => (
  <x.div margin={4}>
    <Spaced mx={1}>
      <SocialLink icon={FiGithub} label="GitHub" link="https://github.com/DeanBowler" />
      <SocialLink
        icon={FiLinkedin}
        label="LinkedIn"
        link="https://www.linkedin.com/in/dean-bowler-875a7323"
      />
      <SocialLink
        icon={FiTwitter}
        label="Twitter"
        link="https://twitter.com/SpencerBatwick"
      />
    </Spaced>
  </x.div>
);
