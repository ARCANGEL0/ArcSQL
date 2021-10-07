import './App.css';
import React, { useState } from 'react';

import { AnimatorGeneralProvider } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import { ArwesThemeProvider, StylesBaseline, FrameCorners } from '@arwes/core';
import './App.css';
const SOUND_ASSEMBLE_URL = 'https://playground.arwes.dev/assets/sounds/typing.mp3';

const animatorGeneral = { duration: { enter: 1500, exit: 200 } };
const audioSettings = { common: { volume: 1.25 } };
const playersSettings = { assemble: { src: [SOUND_ASSEMBLE_URL], loop: true } };
const bleepsSettings = { assemble: { player: 'assemble' } };


function Frame(props) {
  const [activate, setActive] = React.useState(true);

  
  return (

    <ArwesThemeProvider>
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <StylesBaseline />
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <FrameCorners animator={{ activate }}
          palette={props.theme}
          cornerWidth={1}
          cornerLength={20}
          showContentLines
          contentLineWidth={1}
           >
              <div className={`${ props.className }`}>     
              {props.children}  
</div>
          </FrameCorners>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </ArwesThemeProvider>

  );
}

export default Frame;
