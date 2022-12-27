import React from "react";
import Length from "./Length";

function Configuration({ settings, updateSettings }) {
  return (
    <section className="configuration-container">
      <h2 className="configuration-header">Settings</h2>
      <div className="configuration-options-container">
        <form
          id="configuration"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <Length length={settings.length} updateSettings={updateSettings} />
          <div className="fieldset-container">
            <fieldset className="include-container">
              <legend>Include</legend>
              <label>
                <input
                  type="checkbox"
                  name="lowercase"
                  checked={settings.lowercase}
                  onChange={updateSettings}
                />
                Lowercase
              </label>
              <label>
                <input
                  type="checkbox"
                  name="uppercase"
                  checked={settings.uppercase}
                  onChange={updateSettings}
                />
                Uppercase
              </label>
              <label>
                <input
                  type="checkbox"
                  name="numbers"
                  checked={settings.numbers}
                  onChange={updateSettings}
                />
                Numbers
              </label>
              <label>
                <input
                  type="checkbox"
                  name="symbols"
                  checked={settings.symbols}
                  onChange={updateSettings}
                />
                Symbols
              </label>
            </fieldset>
            <fieldset className="exclude-container">
              <legend>Exclude</legend>
              <label>
                <input
                  type="checkbox"
                  name="duplicateCharacters"
                  checked={settings.duplicateCharacters}
                  onChange={updateSettings}
                />
                Duplicate characters
              </label>
              <label>
                <input
                  type="checkbox"
                  name="similarCharacters"
                  checked={settings.similarCharacters}
                  onChange={updateSettings}
                />
                Similar characters
              </label>
              <label>
                <input
                  type="checkbox"
                  name="successiveCharacters"
                  checked={settings.successiveCharacters}
                  onChange={updateSettings}
                />
                Successive characters
              </label>
            </fieldset>
            <fieldset className="alternate-options-container">
              <legend>Options</legend>
              <label>
                <input
                  type="checkbox"
                  name="autoCopy"
                  checked={settings.autoCopy}
                  onChange={updateSettings}
                />
                Auto-copy
              </label>
              <label>
                <input
                  type="checkbox"
                  name="saveSettings"
                  checked={settings.saveSettings}
                  onChange={updateSettings}
                />
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
