import React from "react";
import "./Volume.css";

export default function Volume(props) {
  return (
    <div className="Volume">
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={props.volume}
        onChange={props.changeVolume}
      />
    </div>
  );
}
