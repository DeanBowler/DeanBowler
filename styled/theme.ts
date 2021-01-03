import { DefaultTheme } from 'styled-components';

import { SystemProperty, Theme } from '@xstyled/system';

interface Colors {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  text: string;
  background: string;
}

type ColorMode = 'dark';

export interface AppTheme extends Theme {
  colors: Colors & { modes: Record<ColorMode, Partial<Colors>> };
  fonts: {
    normal: string;
    cursive: string;
    monospace: string;
  };
  fontWeights: {
    lighter: number;
    light: number;
    normal: number;
    heavy: number;
  };
  menu: { margin: SystemProperty<number, AppTheme> };
}

const theme: Partial<AppTheme> = {
  images: {
    background: '/background.svg',
    modes: {
      dark: {
        background: '/background-inverse.svg',
      },
    },
  },
  colors: {
    primary: 'hsl(150, 30%, 50%)',
    secondary: 'hsl(300, 20%, 50%)',
    white: '#f9fafa',
    black: '#333333',
    text: '#333333',
    background: '#f9fafa',
    modes: {
      dark: {
        text: '#eaeded',
        background: '#333333',
      },
    },
  },
  fonts: {
    normal: 'Raleway',
    cursive: 'Pacifico',
    monospace: 'monospace',
  },
  fontWeights: {
    lighter: 100,
    light: 200,
    normal: 400,
    heavy: 700,
  },
  lineHeights: {
    solid: '1em',
    title: '1.25em',
    copy: '1.5em',
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
  ],
  menu: { margin: 2 },
};

export default theme as DefaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
