import { useState, useEffect } from "react";

export const sizes = {
  phone: 375, // small phone will check less than this amount to determine
  // smallTablet: 768, // iPad
  tablet: 768, // 1024 iPad pro
  laptop: 992, // What happens to this?
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
  // const isSmallTablet = "isSmallTablet";

  const onLoadDevice = () => {
    return window.innerWidth === breakpoints.macbookAir
      ? isMacbookAir
      : window.innerWidth < breakpoints.tablet && window.innerWidth < breakpoints.phone
      ? isSmallPhone
      : window.innerWidth < breakpoints.tablet
      ? isMobile
      : window.innerWidth < window.innerHeight || window.innerWidth < breakpoints.laptop
      ? isTablet
      : window.innerWidth < breakpoints.desktop
      ? isLaptop
      : isDesktop;
  };

  const [device, setDevice] = useState(onLoadDevice());
  const onResizeDevice = () => {
    return device === (window.innerWidth === breakpoints.macbookAir)
      ? setDevice(isMacbookAir)
      : device === window.innerWidth < breakpoints.phone
      ? setDevice(isSmallPhone)
      : window.innerWidth < breakpoints.tablet
      ? setDevice(isMobile)
      : window.innerWidth < window.innerHeight || window.innerWidth < breakpoints.laptop
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
    isMobile: device === isMobile || device === isSmallPhone,
    isTablet: device === isTablet,
    isLaptop: device === isLaptop || device === isMacbookAir,
    isDesktop: device === isDesktop,
    isMacbookAir: device === isMacbookAir,
    isSmallPhone: device === isSmallPhone,
    isDesktop: device === isDesktop,
  };
}
