import React, { Component } from "react";
import "./DrumPad.css";

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound(e) {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.cuurrentTime = 0;
    audio.play();
  }

  render() {
    return (
      <div className="pad" id={this.props.id} onClick={this.playSound}>
        <audio src={this.props.clip} id={this.props.keyTrigger}></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}
