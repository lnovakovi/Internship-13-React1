import React, { Component } from 'react';

export default class ColoredText extends Component{
  render(){
    return (
      <p 
        style= {{color: this.props.color}}>
        {this.props.label}
      </p>
    );
  }
}
