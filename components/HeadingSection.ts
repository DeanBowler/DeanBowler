import { gradientShift } from '@/styled/keyframes';
import { th } from '@xstyled/system';
import styled from '@xstyled/styled-components';
import { Section } from './Section';

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
