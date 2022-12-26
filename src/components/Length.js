import React from "react";

function Length({ length, updateSettings }) {
  const octalNumber = String(length)[0] === "0";
  const filteredLength = length >= 1 && !octalNumber ? Math.floor(length) : 1;

  return (
    <div className="length-container">
      <input
        className="length-input"
        type="number"
        min="1"
        max="100"
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
        value={filteredLength}
        style={{
          background: `linear-gradient(
    to right,
    ${getComputedStyle(document.body).getPropertyValue(
      "--settings-theme"
    )} ${filteredLength}%,
    rgba(200, 200, 200, 0.4) ${filteredLength}%
  )`,
        }}
      />
    </div>
  );
}

export default Length;
