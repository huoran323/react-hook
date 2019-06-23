import React, { Component } from "react";
import Child from "./Child";

class MemoDemo extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Child seconds={1} />
        {this.state.time.toString()}
      </div>
    );
  }
}

export default MemoDemo;
