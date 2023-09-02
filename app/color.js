"use client"

import React from 'react';
import { HuePicker } from 'react-color';

class ColorPick extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  handleChange(color, event) {
    // console.log(color, event)
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  }

  render() {
    return (
      <HuePicker
        height='15px'
        width='200px'
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
        onChange={ this.handleChange }
        styles={{}}
      />
    );
  }
}

export default ColorPick