export type ImageTransformer = (imageData: ImageData) => void;

export function transformImage(
  image: HTMLImageElement,
  transformers: ImageTransformer[] = [],
) {
  const canvas = document.createElement('canvas');

  canvas.width = image.width;
  canvas.height = image.height;

  const ctx = canvas.getContext('2d');

  if (!ctx) throw new Error('naw');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(image, 0, 0, image.width, image.height);

  const poo = ctx?.getImageData(0, 0, image.width, image.height);

  transformers.forEach(t => {
    t(poo);
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.putImageData(poo, 0, 0);

  const newImage = new Image();
  newImage.src = canvas.toDataURL();

  return newImage;
}
