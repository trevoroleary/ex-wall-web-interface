"use client"

import React from 'react';
import Wheel from '@uiw/react-color-wheel';
import { useState, Fragment } from 'react';

function ColorPick() {
  const [color, setColor] = useState({ r: 255,  g: 255 ,b: 255, a: 1 });
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });

  const onChange = (color) => {
      setColor(color.rgb);
  }
  return (
      <Fragment>
        <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
        {/* <div style={{ width: '100%', height: 34, background: hsvaToHex(hsva) }}></div> */}
      </Fragment>
  )
}

export default ColorPick