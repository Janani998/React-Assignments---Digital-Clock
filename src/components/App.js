import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <>
        <div className="Clock">
          <h3 id="time">{this.state.time} </h3>
        </div>
      </>
    );
  }
}

export default App;
