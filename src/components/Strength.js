import React from "react";
import zxcvbn from "zxcvbn";

function Strength({ password }) {
  let score;

  if (password) {
    score = zxcvbn(password).score;
  }

  const strength = {
    0: "Very weak",
    1: "Weak",
    2: "Moderate",
    3: "Strong",
    4: "Very strong",
  };

  return (
    <section className="strength-container">
      <h2 className="strength-header">
        Strength:
        <span className="strength-text">
          {" "}
          {password ? strength[score] : ""}
        </span>
      </h2>
      <div className="meter-container">
        <div className="meter" strength={password ? score : -1}></div>
      </div>
    </section>
  );
}

export default Strength;
