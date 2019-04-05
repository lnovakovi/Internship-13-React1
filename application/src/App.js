import React, { Component } from 'react';
import ColoredText from "./components/ColoredText";
 
class App extends Component {
  constructor(props){ 
    super(props);

    this.state = {
      color: "",
      clicked: [ true, true, true]
    }
  }
    setColorBold(color) {
      this.setState({color})
    };

    checkClickIndex(index){
      let clicked = this.state.clicked;
      clicked[index] = !this.state.clicked[index];
      this.setState({clicked});
    };
    
  render() {
    return (
      <>
        <h1>Colors</h1>
          <div
            onClick={() => this.setColorBold("red")}
            style={{fontWeight: this.state.color === "red" ? "bold":""}}
          >Red</div>
          <div
            onClick={() => this.setColorBold("blue")}
            style={{fontWeight: this.state.color === "blue" ? "bold":""}}
          >Blue</div>
          <div
            onClick={() => this.setColorBold("green")}
            style={{fontWeight: this.state.color === "green" ? "bold":""}}
          >Green</div>
        <h1>Indexes</h1>
          <div
            onClick={() => this.checkClickIndex(0)}
            style={{fontWeight: this.state.clicked[0] ? "bold":""}}
          >1</div>
          <div
            onClick={() => this.checkClickIndex(1)}
            style={{fontWeight: this.state.clicked[1] ? "bold":""}}
          >2</div>
          <div
            onClick={() => this.checkClickIndex(2)}
            style={{fontWeight: this.state.clicked[2] ? "bold":""}}
          >3</div>
        <h1>Result</h1>
          <ColoredText label={1} color={this.state.clicked[0] ? this.state.color : "black"}/>
          <ColoredText label={2} color={this.state.clicked[1] ? this.state.color : "black"}/>
          <ColoredText label={3} color={this.state.clicked[2] ? this.state.color : "black"}/>
      </>
    );
  }
}

export default App;
