import React, { Component } from "react";
import "./DrumPad.css";

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="pad">{this.props.keyTrigger}</div>;
  }
}
