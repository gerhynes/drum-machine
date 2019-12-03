import React, { Component } from "react";
import Volume from "./Volume";
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
          <div className="machine-header">
            <div className="machine-title">
              <h1 className="title">ACME</h1>
              <span>R. Lynn </span>
              <span>Integrated rhytm machine</span>
            </div>
            <div className="grills">
              <div className="grill">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="grill">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="grill">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="grill">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>

          <div className="machine-body">
            <div className="col-1">
              <div className="dial dial-1"></div>
              <div className="dial dial-2"></div>
              <div className="dial dial-3"></div>
              <div className="lights">
                <div className="light a-light">A</div>
                <div className="light b-light">B</div>
                <div className="light c-light">C</div>
                <div className="light d-light">D</div>
              </div>
              <div className="btn-small"></div>
              <div className="btn-small"></div>
              <div className="btn-small"></div>
              <div className="btn-small"></div>
              <div className="btn-small"></div>
              <Volume
                value={this.state.volume}
                changeVolume={this.changeVolume}
              />
            </div>
            <div className="col-2">
              <div className="title-container">
                <h2 className="brand">
                  <span className="brand-desc">MIDI PRODUCTION CENTER</span>
                  <span className="brand-name">FCC</span> 3000
                </h2>
                <div className="screen">{this.state.display}</div>
              </div>
              <div className="soft-keys">
                <div className="soft-key"></div>
                <div className="soft-key"></div>
                <div className="soft-key"></div>
                <div className="soft-key"></div>
              </div>
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
            </div>
            <div className="col-3">
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
                  <div className="btn-small"></div>
                  <div className="btn-small"></div>
                  <div className="btn-small"></div>
                  <div className="btn-small"></div>
                  <div className="btn-small"></div>
                  <div className="btn-small"></div>
                </div>
              </div>
              <div className="controls">
                <div className="data-entry">
                  <div className="btn-small data-btn"></div>
                  <div className="btn-small data-btn"></div>
                  <div className="dial data-dial">
                    <span className="indent"></span>
                  </div>
                </div>
                <div className="cursor">
                  <div className="btn-small cursor-top"></div>
                  <div className="btn-small cursor-left"></div>
                  <div className="btn-small cursor-right"></div>
                  <div className="btn-small cursor-bottom"></div>
                </div>
              </div>
              <div className="btn-group btn-group-3">
                <div className="btn-lg">ERASE</div>
                <div className="btn-lg">TIMING CORRECT</div>
                <div className="btn-lg">TAP TEMPO</div>
                <div className="btn-lg">MAIN SCREEN</div>
                <div className="btn-lg">HELP</div>
                <div className="btn-lg">{`<<`}</div>
                <div className="btn-lg">{`<`}</div>
                <div className="btn-lg">LOCATE</div>
                <div className="btn-lg">{`>`}</div>
                <div className="btn-lg">{`>>`}</div>
                <div className="btn-lg rec">REC</div>
                <div className="btn-lg over-dub">OVER DUB</div>
                <div className="btn-lg">STOP</div>
                <div className="btn-lg">PLAY</div>
                <div className="btn-lg">PLAY START</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
