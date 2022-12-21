import React from "react";

function Length({ length, updateSettings }) {
  return (
    <div className="length-container">
      <input
        className="length-input"
        type="number"
        name="length"
        onChange={updateSettings}
        value={length}
      />
      <input
        className="length-slider"
        type="range"
        min="1"
        max="100"
        name="length"
        onChange={updateSettings}
        value={length}
        style={{
          background: `linear-gradient(
    to right,
    #F97316 ${length}%,
    rgba(200, 200, 200, 0.4) ${length}%
  )`,
        }}
      />
    </div>
  );
}

export default Length;
