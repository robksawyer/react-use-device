import { useState, useEffect } from "react";

export const sizes = {
  iphone: 375, // small phone will check less than this amount to determine
  tablet: 768,
  laptop: 992,
  macbookAir: 1440,
  desktop: 1170
};

export function useDevice(breakpoints = sizes) {
  if (typeof window === "undefined") {
    return {};
  }
  const isMobile = "isMobile";
  const isTablet = "isTablet";
  const isLaptop = "isLaptop";
  const isDesktop = "isDesktop";
  const isMacbookAir = "isMacbookAir";
  const isSmallPhone = "isSmallPhone";

  const { isMobile, isTablet, isLaptop, isDesktop, isMacbookAir, isSmallPhone } = useDevice();

  const onLoadDevice = () => {
    return device === window.innerWidth === breakpoints.macbookAir
      ? isMacbookAir
      : device === window.innerWidth < breakpoints.tablet && window.innerWidth < breakpoints.iphone
      ? isSmallPhone
      : window.innerWidth < breakpoints.tablet
      ? isMobile
      : window.innerWidth < breakpoints.laptop
      ? isTablet
      : window.innerWidth < breakpoints.desktop
      ? isLaptop
      : isDesktop;
  };

  const [device, setDevice] = useState(onLoadDevice());
  const onResizeDevice = () => {
    return device === window.innerWidth === breakpoints.macbookAir
      ? setDevice(isMacbookAir)
      : device === window.innerWidth < breakpoints.tablet && window.innerWidth < breakpoints.iphone
      ? setDevice(isSmallPhone)
      : window.innerWidth < breakpoints.tablet
      ? setDevice(isMobile)
      : window.innerWidth < breakpoints.laptop
      ? setDevice(isTablet)
      : window.innerWidth < breakpoints.desktop
      ? setDevice(isLaptop)
      : setDevice(isDesktop);
  };

  useEffect(() => {
    window.addEventListener("resize", onResizeDevice);
    return () => {
      window.removeEventListener("resize", onResizeDevice);
    };
  }, []);

  return {
    isMobile: device === isMobile,
    isTablet: device === isTablet,
    isLaptop: device === isLaptop,
    isDesktop: device === isDesktop,
    isMacbookAir: device === isMacbookAir,
    isSmallPhone: device === isSmallPhone,
    isDesktop: device === isDesktop,
  };
}
