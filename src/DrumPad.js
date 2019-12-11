import React, { Component } from "react";
import "./DrumPad.css";

export default class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
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

  activatePad() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  playSound(e) {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.cuurrentTime = 0;
    audio.volume = this.props.volume;
    audio.play();
    this.props.updateDisplay(this.props.id.replace(/-/g, " "));
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
  }

  render() {
    return (
      <div
        className={`drum-pad ${this.state.isActive && "active"}`}
        id={this.props.id}
        onClick={this.playSound}
      >
        <audio src={this.props.clip} id={this.props.keyTrigger}></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}
