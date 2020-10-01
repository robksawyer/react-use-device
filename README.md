# react-use-device

> A custom react hook to render content responsively based on device breakpoints. The contents also updates on screen resize. It works well also on SSR applications like does built with NextJS.

[![NPM](https://img.shields.io/npm/v/react-use-device.svg)](https://www.npmjs.com/package/react-use-device) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-device
```

## Usage with default breakpoint values

> useDevice is a hook that returns an object with breakpoints for four devices.

```jsx
{
    isMobile: device === isMobile,   // up to winndow.innerWidth of 768px
    isTablet: device === isTablet,   // up to winndow.innerWidth of 992px
    isLaptop: device === isLaptop,   // up to winndow.innerWidth of 1170
    isDesktop: device === isDesktop  // from window.innerWidth of 1170 up
};
```

## Example

```jsx
import React from "react";

import { useDevice } from "react-use-device";

const MyComponent = () => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useDevice();

  return (
    <section>
      {isMobile && <h1>I am a mobile screen</h1>}
      {isTablet && <h1>I am a tablet screen</h1>}
      {isLaptop && <h1>I am a laptop screen</h1>}
      {isDesktop && <h1>I am a desktop screen</h1>}
    </section>
  );
};

export default MyComponent;
```

## Usage with your own breakpoint values

> useDevice accepts a breakpoints object as input, so you can adapat the breakpoints to your project needs. It is important to notice here that you can pass whatever values you wish, but the propety names must be as follows:

```jsx
const breakpoints = {
  phone: 375, // useDevice will return  window.innerWidth < breakpoints.tablet && window.innerWidth < breakpoints.phone
  tablet: 650, // useDevice will return isMobile for wiewports < 650 and isTablet for viewports > 650
  laptop: 980, // useDevice will return isTablet for wiewports < 980 and isLaptop for viewports > 980
  desktop: 1200 // useDevice will return isLaptop for wiewports < 1200 and isDesktop for viewports > 1200
};
```

## Example

```jsx
import React from "react";

import { useDevice } from "react-use-device";

const MyComponent = () => {
  const breakpoints = {
    phone: 375,
    tablet: 650,
    laptop: 980,
    desktop: 1200
  };

  const { isMobile, isTablet, isLaptop, isDesktop, isMacbookAir, isSmallPhone } = useDevice(breakpoints);

  return (
    <section>
      {isMobile && <h1>I am a mobile screen</h1>}
      {isTablet && <h1>I am a tablet screen</h1>}
      {isLaptop && <h1>I am a laptop screen</h1>}
      {isDesktop && <h1>I am a desktop screen</h1>}
      {isMacbookAir && <h1>I am a macbook air screen</h1>}
      {isSmallPhone && <h1>I am a small phone screen</h1>}
    </section>
  );
};

export default MyComponent;
```

## License

MIT © [alexBCN84](https://github.com/alexBCN84)
