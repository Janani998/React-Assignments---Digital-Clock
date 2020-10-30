import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true
        })
      });
    }, 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time} </h3>
      </div>
    );
  }
}

export default App;
