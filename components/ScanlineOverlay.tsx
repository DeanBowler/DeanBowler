// export interface ScanlineoOverlayProps

import styled, { keyframes } from '@xstyled/styled-components';

const scanline = keyframes` 
{
  0% {
    transform: translate3d(0, 200000%, 0);
  }
}`;

const scanlines = keyframes` 
{
  0% {
    background-position: 0 50%;
  }
}`;

const StyledScanlines = styled.div`
  position: fixed;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  :after,
  :before {
    content: '';
    display: block;
    pointer-events: none;
    position: absolute;
  }

  :before {
    width: 100%;
    height: 2px;
    background: rgba(12, 6, 6, 0.3);
    opacity: 0.75;

    animation: ${scanline} 6s linear infinite;
  }

  :after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2147483648;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.2) 51%);
    background-size: 100% 4px;

    animation ${scanlines} 1s steps(60) infinite;
  }
`;

export function ScanlineOverlay() {
  return <StyledScanlines />;
}
