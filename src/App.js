import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.updateText = this.updateText.bind(this);
    this.state = {
      repeat: ""
    }
  }

  updateText(event){
    this.setState({
      repeat: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" value={this.state.repeat} onChange={this.updateText} />
        <p className="repeater">{this.state.repeat}</p>
      </div>
    );
  }
}

export default App;
