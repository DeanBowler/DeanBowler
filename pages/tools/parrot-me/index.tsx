import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { x } from '@xstyled/styled-components';
import GIF from 'gif.js';
import { FiInfo as InfoIcon } from 'react-icons/fi';

import Spaced from '@/styled/Spaced';
import { Button } from '@/components/Button';
import { transformImage } from '@/lib/image/transformImage';
import { setColor } from '@/lib/image/setColor';
import { HeadingSection } from '@/components/HeadingSection';
import { Layout } from '@/components/Layout';
import { LayoutSettings, StyleSettings } from '@/components/ParrotGenerator/types';
import { LayoutSettingsPanel } from '@/components/ParrotGenerator/LayoutSettingsPanel';
import { StyleSettingsPanel } from '@/components/ParrotGenerator/StyleSettingsPanel';
import { lighten } from '@/lib/image/lighten';
import { downloadBlob } from '@/lib/downloadBlob';
import { preComputedPalette } from '@/components/ParrotGenerator/precomputedPalette';

const loadImageAsync = (imageUrl: string) => {
  const image = new Image();
  image.src = imageUrl;

  return new Promise<HTMLImageElement>(res => {
    image.onload = () => res(image);
  });
};

const loadImages = async (imagePaths: string[]) => {
  const images: HTMLImageElement[] = [];

  for (const imagePath of imagePaths) {
    const image = await loadImageAsync(imagePath);
    images.push(image);
  }

  return images;
};

// TODO: store all these separate meta arrays in one array
const frameColors = [
  { hue: 0, saturation: 45 },
  { hue: 0, saturation: 45 },
  { hue: 39, saturation: 46 },
  { hue: 39, saturation: 46 },
  { hue: 121, saturation: 48 },
  { hue: 121, saturation: 48 },
  { hue: 180, saturation: 49 },
  { hue: 180, saturation: 49 },
  { hue: 217, saturation: 46 },
  { hue: 217, saturation: 46 },
  { hue: 281, saturation: 46 },
  { hue: 281, saturation: 46 },
  { hue: 302, saturation: 46 },
  { hue: 302, saturation: 46 },
  { hue: 304, saturation: 60 },
  { hue: 304, saturation: 60 },
  { hue: 329, saturation: 58 },
  { hue: 329, saturation: 58 },
  { hue: 0, saturation: 60 },
  { hue: 0, saturation: 60 },
];

const frameMeta = [
  { tracking: [86, 62] },
  { tracking: [78, 60] },
  { tracking: [70, 56] },
  { tracking: [62, 58] },
  { tracking: [56, 60] },
  { tracking: [50, 62] },
  { tracking: [44, 66] },
  { tracking: [43, 68] },
  { tracking: [44, 68] },
  { tracking: [46, 70] },
  { tracking: [50, 74] },
  { tracking: [60, 75] },
  { tracking: [68, 76] },
  { tracking: [74, 80] },
  { tracking: [79, 81] },
  { tracking: [84, 80] },
  { tracking: [88, 74] },
  { tracking: [92, 74] },
  { tracking: [95, 70] },
  { tracking: [92, 66] },
];

const frames = [
  '/parrot-frames/1.png',
  '/parrot-frames/2.png',
  '/parrot-frames/3.png',
  '/parrot-frames/4.png',
  '/parrot-frames/5.png',
  '/parrot-frames/6.png',
  '/parrot-frames/7.png',
  '/parrot-frames/8.png',
  '/parrot-frames/9.png',
  '/parrot-frames/10.png',
  '/parrot-frames/11.png',
  '/parrot-frames/12.png',
  '/parrot-frames/13.png',
  '/parrot-frames/14.png',
  '/parrot-frames/15.png',
  '/parrot-frames/16.png',
  '/parrot-frames/17.png',
  '/parrot-frames/18.png',
  '/parrot-frames/19.png',
  '/parrot-frames/20.png',
];

const FRAMES_PER_SECOND = 30;
const FRAME_MIN_TIME = 1000 / FRAMES_PER_SECOND;

const OUTLINE_WIDTH = 6;

export default function ParrotMe() {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  const frame = useRef(0);

  const [userImage, setUserImage] = useState<HTMLImageElement>();
  const userImageName = useRef('');

  const parrotImages = useRef<HTMLImageElement[]>([]);

  const userImageFrames = useRef<HTMLImageElement[]>([]);
  const outlineFrame = useRef<HTMLImageElement>();

  const [layoutSettings, setLayoutSettings] = useState<LayoutSettings>({
    offsetX: 0,
    offsetY: 0,
    scale: 1,
    flipHorizontal: false,
    flipVertical: false,
  });

  const [styleSettings, setStyleSettings] = useState<StyleSettings>({
    addOutline: true,
    matchHue: true,
    lighten: 1,
    sharpen: 0,
  });

  const layoutRef = useRef(layoutSettings);
  const styleRef = useRef(styleSettings);

  useEffect(() => {
    const loadParrotImages = async () => {
      parrotImages.current = await loadImages(frames);
    };

    loadParrotImages();
  }, []);

  useEffect(() => {
    layoutRef.current = layoutSettings;
    styleRef.current = styleSettings;
  }, [layoutSettings, styleSettings]);

  useEffect(() => {
    if (userImage) {
      userImageFrames.current = styleSettings.matchHue
        ? frameColors.map(({ hue, saturation }) =>
            transformImage(userImage, [setColor(hue, saturation, styleSettings.lighten)]),
          )
        : [transformImage(userImage, [lighten(styleSettings.lighten)])];

      outlineFrame.current = transformImage(userImage, [setColor(0, 0, 0.1)]);
    }
  }, [userImage, styleSettings.lighten, styleSettings.matchHue]);

  const onDrop = useCallback(async ([file]: File[]) => {
    if (!file) return;
    const img = await loadImageAsync(URL.createObjectURL(file));

    userImageName.current = file.name.substr(0, file.name.lastIndexOf('.'));
    return setUserImage(img);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: 'image/*',
    noClick: true,
    onDrop,
    maxFiles: 1,
    maxSize: 256 * 1024,
  });

  useEffect(() => {
    let active = true;

    async function startRender() {
      if (!canvas.current) return;
      const ctx = canvas.current.getContext('2d');
      if (!ctx) return;

      let lastTime = 0;

      const draw = (time: number) => {
        if (!active) return;
        if (!canvas.current) return;

        requestAnimationFrame(draw);

        const deltaTime = time - lastTime;

        if (deltaTime > FRAME_MIN_TIME) {
          drawParrotFrame(
            canvas.current,
            ctx,
            parrotImages.current,
            frame.current ?? 0,
            layoutRef.current,
            styleRef.current,
            outlineFrame.current,
            userImage,
            userImageFrames.current,
          );

          frame.current += 1;
          if (frame.current >= frames.length) frame.current = 0;
        }

        lastTime = time - (deltaTime % FRAME_MIN_TIME);
      };

      requestAnimationFrame(draw);
    }

    startRender();

    return () => {
      active = false;
    };
  }, [userImage]);

  const saveGif = async () => {
    if (!canvas.current) return;

    const gif = new GIF({
      workers: 2,
      quality: 10,
      transparent: 'true',
      globalPalette: styleSettings.matchHue ? preComputedPalette : false,
      // dither: true,
      height: 128,
      width: 128,
      workerScript: require('url-loader!gif.js/dist/gif.worker.js').default,
    } as GIF.Options);

    const gifCanvas = document.createElement('canvas');
    gifCanvas.width = 128;
    gifCanvas.height = 128;
    const ctx = gifCanvas.getContext('2d');
    if (!ctx) return;

    for (let currentFrame = 0; currentFrame < frameMeta.length; currentFrame++) {
      drawParrotFrame(
        gifCanvas,
        ctx,
        parrotImages.current,
        currentFrame,
        layoutRef.current,
        styleRef.current,
        outlineFrame.current,
        userImage,
        userImageFrames.current,
      );
      gif.addFrame(gifCanvas, { delay: FRAME_MIN_TIME, copy: true });
    }

    gif.on('finished', blob => downloadBlob(blob, `${userImageName.current}-parrot.gif`));

    gif.render();
  };

  return (
    <Layout title="Parrot Me | Dean Bowler">
      <HeadingSection>
        <x.div row justifyContent={{ sm: 'center' }} my={5} mx={4}>
          <x.div col={{ sm: 3 / 4, md: 2 / 3 }}>
            <x.h1 fontWeight="lighter" fontSize={{ xs: '5xl', sm: '6xl' }} m={0}>
              Parrot Party Time
            </x.h1>
            <x.h2 fontWeight="normal" fontSize={{ xs: 'xl', sm: '2xl' }} m={0}>
              Join the parrot party with your face
            </x.h2>
          </x.div>
        </x.div>
      </HeadingSection>

      <x.div
        display="flex"
        alignItems="center"
        mt={3}
        p={3}
        backgroundColor="rgba(0, 0, 0, 0.6)"
        color="white"
        borderRadius={10}
        maxWidth={8}
        mx={{ xs: 3, sm: 'auto' }}
      >
        <x.span display="flex" flex="0 0 auto">
          <InfoIcon size="1.5em" />
        </x.span>
        <x.span ml={3}>
          For best results, use a transparent png with the face cut out
        </x.span>
      </x.div>
      <x.div
        row
        alignItems="baseline"
        my={2}
        container
        mx="auto"
        display="flex"
        justifyContent="flex-end"
      >
        <Spaced m={4}>
          <x.div col display="flex" justifyContent="flex-end">
            <LayoutSettingsPanel
              settings={layoutSettings}
              onSettingsChange={s => setLayoutSettings(cs => ({ ...cs, ...s }))}
            />
          </x.div>
          <x.div col flexDirection="column" justifyContent="center" w={5} display="flex">
            <Spaced mb={4} includeLast={false}>
              <x.div
                {...getRootProps()}
                tabIndex={-1}
                row
                flexDirection="column"
                alignItems="center"
                outline="none"
              >
                <input {...getInputProps()} />
                <Button fullWidth onClick={open}>
                  {isDragActive ? 'Drop Picture' : 'Select Picture'}
                </Button>
                <x.canvas mt={4} ref={canvas} width="128px" height="128px" />
              </x.div>
              <Button onClick={saveGif}>Generate GIF</Button>
            </Spaced>
          </x.div>
          <x.div col>
            <StyleSettingsPanel
              settings={styleSettings}
              onSettingsChange={s => setStyleSettings(ss => ({ ...ss, ...s }))}
            />
          </x.div>
        </Spaced>
      </x.div>
    </Layout>
  );
}

function drawParrotFrame(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  parrotImages: HTMLImageElement[],
  frame: number,
  layoutSettings: LayoutSettings,
  styleSettings: StyleSettings,
  outlineFrame: HTMLImageElement | undefined,
  userImage: HTMLImageElement | undefined,
  userImageFrames: HTMLImageElement[],
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (parrotImages.length === 0) return;

  const frameParrot = parrotImages[frame];
  const [trackX, trackY] = frameMeta[frame].tracking;

  ctx.drawImage(frameParrot, 0, 0, frameParrot.width, frameParrot.height);

  if (userImage && userImageFrames.length) {
    const normalisedScale = (canvas.height / userImage.height) * 0.75;

    const scale = normalisedScale * layoutSettings.scale;

    const horizontalFlip = layoutSettings.flipHorizontal ? -1 : 1;
    const verticalFlip = layoutSettings.flipVertical ? -1 : 1;

    const offsetX =
      (trackX - (userImage.width * scale) / 2 + layoutSettings.offsetX) * horizontalFlip;
    const offsetY =
      (trackY - (userImage.height * scale) / 2 + layoutSettings.offsetY) * verticalFlip;

    ctx.save();

    if (layoutSettings.flipHorizontal) {
      ctx.translate(userImage.width * scale, 0);
      ctx.scale(horizontalFlip, 1);
    }

    if (layoutSettings.flipVertical) {
      ctx.translate(0, userImage.height * scale);
      ctx.scale(1, verticalFlip);
    }

    if (outlineFrame && styleSettings.addOutline) {
      ctx.drawImage(
        outlineFrame,
        offsetX - OUTLINE_WIDTH / 2,
        offsetY - OUTLINE_WIDTH / 2,
        userImage.width * scale + OUTLINE_WIDTH,
        userImage.height * scale + OUTLINE_WIDTH,
      );
    }

    ctx.drawImage(
      userImageFrames[frame % userImageFrames.length],
      offsetX,
      offsetY,
      userImage.width * scale,
      userImage.height * scale,
    );

    ctx.restore();
  }
}
