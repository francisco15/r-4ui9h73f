import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = { text: "" };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.handleChange} value={this.state.text} />
        <p className="repeater">{this.state.repeat}</p>
      </div>
    );
  }
}

export default App;
