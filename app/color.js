"use client"
// "client side"

import React from 'react';
import Wheel from '@uiw/react-color-wheel';
import { useState, Fragment } from 'react';
import { sendMessage } from './apiservice';

function ColorPick() {
  const [color, setColor] = useState({ r: 255,  g: 255 ,b: 255, a: 1 });
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [timeOfLastSend, setTimeOfLastSend] = useState(Date.now()); 
  // const onChange = (color) => {
  //     setColor(color.rgb);
  // }
  const onChange = (color) => {
      sendMessage();
      console.log("HERE GOES!")
      setHsva({ ...hsva, ...color.hsva })
      if (Date.now() - timeOfLastSend > 0.01){
        setTimeOfLastSend(Date.now())
        fetch('http://127.0.0.1:5000/api/set_primary_color',{
          method: "POST",
          body: JSON.stringify(color.rgb),
          contentType: 'application/json',
          // headers: {
            // "Authorization": "Bearer tk_632ejha524dlfcgx7dnqnxb5in4sx"
          // }
        })
        // .then(response => response.json())
        .then(data => {
          console.log(data); // Handle the response data here
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
  }
  return (
      <Fragment>
        <Wheel color={hsva} onChange={onChange} />
        {/* <div style={{ width: '100%', height: 34, background: hsvaToHex(hsva) }}></div> */}
      </Fragment>
  )
}

export default ColorPick