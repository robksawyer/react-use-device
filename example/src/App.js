import React from 'react'

import { useDevice } from 'react-use-device'
import 'react-use-device/dist/index.css'

const App = () => {
  const { isMobile, isTablet, isLaptop, isDesktop, isMacbookAir, isSmallPhone } = useDevice();

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
}

export default App
