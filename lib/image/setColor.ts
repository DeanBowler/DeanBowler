import { rgb, hsl } from 'color-convert';

import { ImageTransformer } from './transformImage';

export const setColor = (
  hue: number,
  saturation: number,
  luminanceMult = 1,
): ImageTransformer => (imageData: ImageData) => {
  for (let i = 0; i < imageData.data.length; i += 4) {
    const r = imageData.data[i];
    const g = imageData.data[i + 1];
    const b = imageData.data[i + 2];

    const l = rgb.hsl(r, g, b)[2] * luminanceMult;

    // Temporary hack because the shitty GIF encoder treats near-pure black as transparent
    const safeLum = l < 2 ? 2 : l;

    const rgb2 = hsl.rgb([hue, saturation, safeLum]);

    imageData.data[i] = rgb2[0];
    imageData.data[i + 1] = rgb2[1];
    imageData.data[i + 2] = rgb2[2];
  }
};
