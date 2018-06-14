import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
  <div className="unutarnjiLivi">
          <div className="unutarnjiNaslov">
          <h2 className="h2naslov">{this.props.todonaslov}</h2>
          </div>
          <div className="unutarnjiDatum">
          <p className="pdatum">{this.props.tododatum}</p>
          </div>
          <div className="unutarnjiTeks">
          <p className="ptext">{this.props.todotext}</p>
        </div>
        </div>
        <div className="unutarnjiDesni">
        <button className="doneBotun" onClick="done1();">Done</button>
        </div>
      </div>
    );
  }
}

export default App;
/*

*/