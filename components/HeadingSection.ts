import { th } from '@xstyled/system';
import styled, { keyframes } from 'styled-components';
import { Section } from './Section';

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

const BACKGROUND_GRADIENT_ONE = '#31364e';
const BACKGROUND_GRADIENT_TWO = '#5a3636';
const BACKGROUND_GRADIENT_THREE = '#5a3c58';

export const HeadingSection = styled(Section)`
  background: linear-gradient(
    -25deg,
    ${BACKGROUND_GRADIENT_ONE},
    ${BACKGROUND_GRADIENT_TWO},
    ${th.color(BACKGROUND_GRADIENT_THREE)},
    ${th.color(BACKGROUND_GRADIENT_TWO)},
    ${th.color(BACKGROUND_GRADIENT_ONE)}
  );
  background-size: 500% 500%;

  animation: ${gradientShift} 30s ease infinite forwards;

  padding-top: ${th.space(4)};
  min-height: ${p => (p.fullHeight ? `calc(100vh - ${th.space(4)(p)})` : 'inherit')};

  color: ${th.color('white')};

  ::before {
    content: '';
    background-image: url(/background-header.svg);
    background-attachment: fixed;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    pointer-events: none;
  }
`;
