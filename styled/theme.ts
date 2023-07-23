import { DefaultTheme } from 'styled-components';

import { Theme, defaultTheme } from '@xstyled/system';

interface Colors {
  primary: string;
  'primary-a10': string;
  'primary-a20': string;
  'primary-a30': string;
  'primary-a50': string;
  'primary-a80': string;
  secondary: string;
  white: string;
  black: string;
  text: string;
  'text-a30': string;
  'text-a50': string;
  background: string;
}

type ColorMode = 'default' | 'dark';

export interface AppTheme extends Theme {
  initialColorModeName?: ColorMode;
  defaultColorModeName: ColorMode;
  colors: Colors & { modes: Record<Exclude<ColorMode, 'default'>, Partial<Colors>> };
  fonts: {
    normal: string;
    heading: string;
    cursive: string;
    monospace: string;
  };
  fontWeights: {
    lighter: number;
    light: number;
    normal: number;
    heavy: number;
  };
}

const theme: Partial<AppTheme> = {
  ...defaultTheme,
  initialColorModeName: 'dark',
  colors: {
    primary: 'hsl(150, 40%, 48%)',
    'primary-a10': 'hsla(150, 40%, 50%, 0.1)',
    'primary-a20': 'hsla(150, 40%, 50%, 0.2)',
    'primary-a30': 'hsla(150, 40%, 50%, 0.3)',
    'primary-a50': 'hsla(150, 40%, 50%, 0.5)',
    'primary-a80': 'hsla(150, 40%, 50%, 0.8)',
    secondary: 'hsl(300, 20%, 55%)',
    white: 'hsl(180deg 10% 99%)',
    black: '#333333',
    text: 'hsl(235, 50%, 5%)',
    'text-a30': 'hsla(235, 20%, 10%, 0.26)',
    'text-a50': 'hsla(235, 20%, 10%, 0.5)',
    background: 'hsl(180deg 10% 99.6%)',
    modes: {
      dark: {
        primary: 'hsl(150, 40%, 50%)',
        text: 'hsl(180 8% 92%)',
        'text-a30': 'hsla(180, 8%, 92%, 0.26)',
        'text-a50': 'hsla(180, 8%, 92%, 0.5)',
        background: 'hsl(235deg 15% 16%)',
      },
    },
  },
  fonts: {
    normal:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    heading: 'Raleway',
    cursive: 'Pacifico',
    monospace: 'monospace',
  },
  fontWeights: {
    lighter: 100,
    light: 200,
    normal: 400,
    heavy: 700,
  },
  fontSizes: {
    ...defaultTheme.fontSizes,
  },
  lineHeights: {
    normal: 'normal',
    solid: '1',
    title: '1.25',
    tightCopy: '1.5',
    copy: '1.7',
  },
  sizes: [
    0,
    '1rem',
    '1.618rem',
    '2.618rem',
    '4.24rem',
    '6.85rem',
    '12rem',
    '18rem',
    '32rem',
    '52rem',
    '64rem',
  ],
  space: [0, 4, 8, 16, 24, 48, 96, 144, 192, 240],
  screens: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
};

export default theme as DefaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
