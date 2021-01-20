/** Resize an image to fit within the maximum width/height specified */
export function resizeImage(image: HTMLImageElement, maxWidthOrHeight: number) {
  const largestDimension = Math.max(image.width, image.height);

  if (largestDimension < maxWidthOrHeight) return image;

  const scale = maxWidthOrHeight / largestDimension;

  const canvas = document.createElement('canvas');

  canvas.width = image.width * scale;
  canvas.height = image.height * scale;

  const ctx = canvas.getContext('2d');

  if (!ctx) throw new Error("couldn't get 2d context from canvas");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(image, 0, 0, image.width * scale, image.height * scale);

  const newImage = new Image();
  newImage.src = canvas.toDataURL();

  return newImage;
}
