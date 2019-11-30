import React, { Component } from "react";
import DrumPad from "./DrumPad";
import "./DrumMachine.css";

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "DRUMS",
      volume: 0.5
    };
    this.clearDisplay = this.clearDisplay.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  static defaultProps = {
    bank: [
      {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    ]
  };

  changeVolume(e) {
    this.setState({
      volume: e.target.value,
      display: `Volume ${e.target.value * 10}`
    });
    setTimeout(() => {
      this.clearDisplay();
    }, 1000);
  }

  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }
  render() {
    return (
      <div className="DrumMachine">
        <div className="machine">
          <div className="drum-pads">
            {this.props.bank.map(pad => (
              <DrumPad
                id={pad.id}
                key={pad.id}
                keyCode={pad.keyCode}
                keyTrigger={pad.keyTrigger}
                clip={pad.url}
              />
            ))}
          </div>
          <div className="controls">
            <div className="title-container">
              <h1 className="title">
                <span className="brand">FCC</span> 3000
              </h1>
              <div className="screen">{this.state.display}</div>
            </div>
            <button className="btn">Power</button>
            <button className="btn">Volume</button>
            <div className="volume">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={this.state.volume}
                onChange={this.changeVolume}
              />
            </div>
            <div className="dial">
              <span className="indent"></span>
            </div>
            <div className="btn-panel">
              <div className="btn-group btn-group-1">
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
              </div>
              <div className="btn-group btn-group-2">
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
                <div className="btn-small"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
