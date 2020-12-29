import { DefaultTheme } from 'styled-components';

import { SystemProperty, Theme } from '@xstyled/system';

interface Colors {
  primary: string;
  white: string;
  black: string;
  text: string;
  backgroundStart: string;
  backgroundStop: string;
  backgroundStopAlt: string;
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
  defaultColorModeName: 'dark',
  images: {
    background: '/background.svg',
    modes: {
      dark: {
        background: '/background-inverse.svg',
      },
    },
  },
  colors: {
    primary: '#47ae75',
    white: '#eaeded',
    black: '#333333',
    text: 'black',
    backgroundStart: '#31364e',
    backgroundStop: '#5a3636',
    backgroundStopAlt: '#5a3c58',
    modes: {
      dark: {
        text: 'white',
        backgroundStart: '#31364e',
        backgroundStop: '#5a3636',
        backgroundStopAlt: '#5a3c58',
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
