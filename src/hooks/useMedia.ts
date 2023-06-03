import { useEffect, useState } from 'react';
import { DEVICE_TYPE } from '../constants';

interface IGetValue {
  isExtraSmallMobile: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWidescreen: boolean;
}

const useMedia = (): IGetValue => {
  const getValue = (): IGetValue => {
    const mediaQueryLists = DEVICE_TYPE.map(q => window.matchMedia(q));
    const device = mediaQueryLists.filter(i => !!i.matches);

    const isExtraSmallMobile = device[0]?.media === DEVICE_TYPE[0];
    const isMobile = device[0]?.media === DEVICE_TYPE[1];
    const isTablet = device[0]?.media === DEVICE_TYPE[2];
    const isDesktop = device[0]?.media === DEVICE_TYPE[3];
    const isWidescreen = !isMobile && !isTablet && !isDesktop;

    return { isExtraSmallMobile, isMobile, isTablet, isDesktop, isWidescreen };
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = (): void => setValue(getValue);

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  });

  return value;
};

export default useMedia;
