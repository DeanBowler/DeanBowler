export interface PreloadImageProps {
  imageUrl: string;
}

export const PreloadImage = ({ imageUrl }: PreloadImageProps) => (
  <link rel="preload" href={imageUrl} as="image" />
);
