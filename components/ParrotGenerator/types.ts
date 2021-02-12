export interface LayoutSettings {
  offsetX: number;
  offsetY: number;
  scale: number;
  flipHorizontal: boolean;
  flipVertical: boolean;
}

export interface StyleSettings {
  outlineStyle: 'inside' | 'outside' | undefined;
  matchHue: boolean;
  lighten: number;
  sharpen: number;
}
