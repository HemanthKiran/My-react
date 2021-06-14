import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      Message: "welcome visitor",
    };
  }
  changeMessage() {
    this.setState({
      Message: "thank you for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h2> {this.state.Message}</h2>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
