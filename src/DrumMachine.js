import React, { Component } from "react";
import "./DrumMachine.css";

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "DRUMS"
    };
  }
  render() {
    return (
      <div className="DrumMachine">
        <div className="machine">
          <div className="drum-pads">
            <div className="pad pad-1">Q</div>
            <div className="pad pad-2">W</div>
            <div className="pad pad-3">E</div>
            <div className="pad pad-4">A</div>
            <div className="pad pad-5">S</div>
            <div className="pad pad-6">D</div>
            <div className="pad pad-7">Z</div>
            <div className="pad pad-8">X</div>
            <div className="pad pad-9">C</div>
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
