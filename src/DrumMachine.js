import React, { Component } from "react";
import Volume from "./Volume";
import DrumPad from "./DrumPad";
import "./DrumMachine.css";

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "DRUMS",
      volume: 0.5,
      currentBank: "bankOne"
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.chooseBank = this.chooseBank.bind(this);
  }

  static defaultProps = {
    bankOne: [
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
    ],
    bankTwo: [
      {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
      },
      {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
      },
      {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
      },
      {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
      },
      {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
      },
      {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
      },
      {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
      },
      {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
      },
      {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
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

  chooseBank(e) {
    this.setState({
      display: e.target.id,
      currentBank: e.target.id
    });
  }

  updateDisplay(value) {
    this.setState({
      display: value
    });
  }

  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }

  render() {
    return (
      <div className="DrumMachine" id="drum-machine">
        <div className="machine">
          <header className="machine-header">
            <div className="machine-header__title">
              <h2 className="machine-header__brand">ACME</h2>
              <span className="machine-header__signature">R. Lynn </span>
              <span className="machine-header__desc">
                INTEGRATED RHYTHM MACHINE <br /> 16 BIT DRUM SAMPLER/MIDI
                SEQUENCER
              </span>
            </div>
            <div className="machine-header__grills">
              <div className="grill">
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
              </div>
              <div className="grill">
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
              </div>
              <div className="grill">
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
              </div>
              <div className="grill">
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
                <div className="grill__bar"></div>
              </div>
            </div>
          </header>

          <div className="machine-body">
            <div className="volume-controls">
              <div className="dial dial-1"></div>
              <div className="dial dial-2"></div>
              <div className="dial dial-3"></div>
              <div className="lights">
                <div className="light a-light">A</div>
                <div className="light b-light">B</div>
                <div className="light c-light">C</div>
                <div className="light d-light">D</div>
              </div>
              <div className="btn btn-small"></div>
              <div className="btn btn-small"></div>
              <div className="btn btn-small"></div>
              <div className="btn btn-small"></div>
              <div className="btn btn-small"></div>
              <Volume
                value={this.state.volume}
                changeVolume={this.changeVolume}
              />
            </div>
            <div className="drum-contorls">
              <div className="display-container">
                <h2 className="display__brand">
                  <span className="display__brand-desc">
                    MIDI PRODUCTION CENTER
                  </span>
                  <span className="display__brand-name">FCC</span> 3000
                </h2>
                <div className="display__screen" id="display">
                  {this.state.display}
                </div>
              </div>
              <div className="soft-keys">
                <div className="soft-key"></div>
                <div className="soft-key"></div>
                <div className="soft-key"></div>
                <div className="soft-key"></div>
              </div>
              <div className="drum-pads">
                {this.state.currentBank === "bankOne"
                  ? this.props.bankOne.map(pad => (
                      <DrumPad
                        id={pad.id}
                        key={pad.id}
                        keyCode={pad.keyCode}
                        keyTrigger={pad.keyTrigger}
                        clip={pad.url}
                        volume={this.state.volume}
                        updateDisplay={this.updateDisplay}
                      />
                    ))
                  : this.props.bankTwo.map(pad => (
                      <DrumPad
                        id={pad.id}
                        key={pad.id}
                        keyCode={pad.keyCode}
                        keyTrigger={pad.keyTrigger}
                        clip={pad.url}
                        volume={this.state.volume}
                        updateDisplay={this.updateDisplay}
                      />
                    ))}
              </div>
            </div>
            <div className="bank-controls">
              <div className="btn-panel">
                <div className="btn-group date-btns">
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                </div>
                <div className="btn-group command-btns">
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                  <div className="btn btn-small"></div>
                </div>
              </div>
              <div className="data-controls">
                <div className="data-entry">
                  <div className="btn btn-small data-btn"></div>
                  <div className="btn btn-small data-btn"></div>
                  <div className="dial data-dial"></div>
                </div>
                <div className="cursor">
                  <div className="btn btn-small cursor-btn cursor-top"></div>
                  <div className="btn btn-small cursor-btn cursor-left"></div>
                  <div className="btn btn-small cursor-btn cursor-right"></div>
                  <div className="btn btn-small cursor-btn cursor-bottom"></div>
                </div>
              </div>
              <div className="btn-group time-btns">
                <div className="btn btn-lg"></div>
                <div className="btn btn-lg"></div>
                <div className="btn btn-lg"></div>
                <div className="btn btn-lg"></div>
                <div className="btn btn-lg"></div>
              </div>
              <div className="btn-group bank-btns">
                <div className="btn btn-lg"></div>
                <div className="btn btn-lg"></div>
                <div className="btn btn-lg"></div>
                <div className="btn btn-lg"></div>
                <div className="btn btn-lg"></div>
                <button
                  className="btn btn-lg bank-btn bank-1"
                  id="bankOne"
                  onClick={this.chooseBank}
                >
                  Bank 1
                </button>
                <button
                  className="btn btn-lg bank-btn bank-1"
                  id="bankTwo"
                  onClick={this.chooseBank}
                >
                  Bank 2
                </button>
                <div className="btn btn-lg bank-btn"></div>
                <div className="btn btn-lg bank-btn"></div>
                <div className="btn btn-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
