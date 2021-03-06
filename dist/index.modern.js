import { useState, useEffect } from 'react';

var sizes = {
  phone: 375,
  tablet: 768,
  laptop: 992,
  macbookAir: 1440,
  smallDesktop: 1025,
  desktop: 1441,
};
function useDevice(breakpoints) {
  if (breakpoints === void 0) {
    breakpoints = sizes;
  }

  if (typeof window === "undefined") {
    return {};
  }

  var isMobile = "isMobile";
  var isTablet = "isTablet";
  var isLaptop = "isLaptop";
  var isDesktop = "isDesktop";
  var isMacbookAir = "isMacbookAir";
  var isSmallDesktop = "isSmallDesktop";
  var isSmallPhone = "isSmallPhone";

  var onLoadDevice = function onLoadDevice() {
    return window.innerWidth === breakpoints.macbookAir ? isMacbookAir : window.innerWidth === breakpoints.smallDesktop ? isSmallDesktop : window.innerWidth < breakpoints.tablet && window.innerWidth < breakpoints.phone ? isSmallPhone : window.innerWidth < breakpoints.tablet ? isMobile : window.innerWidth < window.innerHeight || window.innerWidth < breakpoints.laptop ? isTablet : window.innerWidth < breakpoints.desktop ? isLaptop : isDesktop;
  };

  var _useState = useState(onLoadDevice()),
      device = _useState[0],
      setDevice = _useState[1];

  var onResizeDevice = function onResizeDevice() {
    return device === (window.innerWidth === breakpoints.macbookAir) ? setDevice(isMacbookAir) : device === (window.innerWidth === breakpoints.smallDesktop) ? setDevice(isSmallDesktop) : device === window.innerWidth < breakpoints.phone ? setDevice(isSmallPhone) : window.innerWidth < breakpoints.tablet ? setDevice(isMobile) : window.innerWidth < window.innerHeight || window.innerWidth < breakpoints.laptop ? setDevice(isTablet) : window.innerWidth < breakpoints.desktop ? setDevice(isLaptop) : setDevice(isDesktop);
  };

  useEffect(function () {
    window.addEventListener("resize", onResizeDevice);
    return function () {
      window.removeEventListener("resize", onResizeDevice);
    };
  }, []);
  return {
    isMobile: device === isMobile || device === isSmallPhone,
    isTablet: device === isTablet,
    isLaptop: device === isLaptop || device === isMacbookAir,
    isDesktop: device === isDesktop,
     isSmallDesktop: device === isSmallDesktop && device !== isTablet && device !== isMobile && device !== isDesktop && device !== isMacbookAir,
    isMacbookAir: device === isMacbookAir,
    isSmallPhone: device === isSmallPhone
  };
}

export { sizes, useDevice };
//# sourceMappingURL=index.modern.js.map
