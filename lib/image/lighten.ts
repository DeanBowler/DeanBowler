import { rgb, hsl } from 'color-convert';

import { ImageTransformer } from './transformImage';

export const lighten = (luminanceMult = 1): ImageTransformer => (
  imageData: ImageData,
) => {
  for (let i = 0; i < imageData.data.length; i += 4) {
    const r = imageData.data[i];
    const g = imageData.data[i + 1];
    const b = imageData.data[i + 2];

    const [h, s, l] = rgb.hsl(r, g, b);

    // Temporary hack because the shitty GIF encoder treats pure black as transparent
    const safeLum = l === 0 ? 1 : l;

    const rgb2 = hsl.rgb([h, s, safeLum * luminanceMult]);

    imageData.data[i] = rgb2[0];
    imageData.data[i + 1] = rgb2[1];
    imageData.data[i + 2] = rgb2[2];
  }
};
