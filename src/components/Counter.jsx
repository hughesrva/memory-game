import React, { Component } from "react";

class Counter extends Component {
  state = { score: 0, totalScore: 0 };
  render() {
    return (
      <h3 className="subtitle">
        Score: {this.state.score} | Total Score: {this.state.totalScore}
      </h3>
    );
  }
}

export default Counter;
