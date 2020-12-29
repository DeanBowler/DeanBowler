import { keyframes } from '@xstyled/styled-components';

export const hueCycleAnimation = keyframes`
from {
  filter: hue-rotate(0deg);
}
to {
  filter: hue-rotate(360deg);
}
`;
