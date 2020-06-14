import React, { useState } from 'react';

import '../styles/reset.scss';
import '../styles/global.scss';

import Section from '../components/section/section';
import Device from '../components/device/device';

export default function Home() {
  const [isLeft, setSide] = useState(false);
  const toggleSide = () => setSide(!isLeft);

  const [isScreen, setScreen] = useState(false);
  const toggleScreen = () => setScreen(!isScreen);

  var bt1 = {
    position: 'absolute',
    top: '100px',
    left: '100px'
  }

  var bt2 = {
    position: 'absolute',
    top: '130px',
    left: '100px'
  }

  return (
    <>
    {/* <Shine/> */}
      <Device side={isLeft} screen={isScreen}></Device>
      <Section>
        <button aria-label="switch side" onClick={toggleSide} style={bt1}>
          switch
        </button>
        <button aria-label="switch side" onClick={toggleScreen} style={bt2}>
          screen
        </button>
        
      </Section>
    </>
  );
}
