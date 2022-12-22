import React from "react";
import Length from "./Length";

function Configuration({ settings, updateSettings, copy }) {
  return (
    <section className="configuration-container">
      <h2 className="configuration-header">Settings</h2>
      <div className="configuration-options-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <Length length={50} updateSettings={updateSettings} />
          <div className="fieldset-container">
            <fieldset className="include-container">
              <legend>Include</legend>
              <label>
                <input type="checkbox" name="lowercase" />
                Lowercase
              </label>
              <label>
                <input type="checkbox" name="uppercase" />
                Uppercase
              </label>
              <label>
                <input type="checkbox" name="numbers" />
                Numbers
              </label>
              <label>
                <input type="checkbox" name="symbols" />
                Symbols
              </label>
            </fieldset>
            <fieldset className="exclude-container">
              <legend>Exclude</legend>
              <label>
                <input type="checkbox" name="duplicateCharacters" />
                Duplicate characters
              </label>
              <label>
                <input type="checkbox" name="similarCharacters" />
                Similar characters
              </label>
              <label>
                <input type="checkbox" name="successiveCharacters" />
                Successive characters
              </label>
            </fieldset>
            <fieldset className="alternate-options-container">
              <legend>Options</legend>
              <label>
                <input type="checkbox" name="autoCopy" />
                Auto-copy
              </label>
              <label>
                <input type="checkbox" name="saveSettings" />
                Save settings
              </label>
            </fieldset>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Configuration;
