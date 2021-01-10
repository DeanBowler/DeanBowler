import { useEffect, useState } from 'react';

export type ScrollDirection = 'DOWN' | 'UP';

export interface UseWindowScrollReturn {
  scrollPositionY: number;
  scrollDeltaY: number;
  scrolledTop: boolean;
  scrollDirection: ScrollDirection;
}

export function useWindowScroll() {
  const [scrollData, setScrollData] = useState<UseWindowScrollReturn>({
    scrollPositionY: 0,
    scrollDeltaY: 0,
    scrolledTop: true,
    scrollDirection: 'DOWN',
  });

  useEffect(() => {
    let lastWindowOffset = window.pageYOffset;

    const fuckOff = () => {
      const scrollPositionY = window.pageYOffset;
      const scrollDeltaY = scrollPositionY - lastWindowOffset;

      setScrollData({
        scrollPositionY,
        scrollDeltaY: scrollDeltaY,
        scrollDirection: scrollDeltaY > 0 ? 'DOWN' : 'UP',
        scrolledTop: scrollPositionY === 0,
      });

      lastWindowOffset = scrollPositionY;
    };

    window.addEventListener('scroll', fuckOff);

    return () => window.removeEventListener('scroll', fuckOff);
  }, []);

  return scrollData;
}
