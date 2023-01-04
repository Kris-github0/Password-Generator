import React, { useState, useEffect } from "react";
import generatePassword from "./generatePassword.js";
import { copyToClipboard, lengthIsValid } from "./helpers.js";
import Display from "../Display/Display.js";
import Strength from "../Strength.js";
import Configuration from "../Configuration.js";

function PasswordGenerator() {
  const [settings, setSettings] = useState(
    localStorage.getItem("settings")
      ? JSON.parse(localStorage.getItem("settings"))
      : {
          length: 16,
          lowercase: true,
          uppercase: true,
          numbers: true,
          symbols: true,
          duplicateCharacters: true,
          similarCharacters: false,
          successiveCharacters: false,
          autoCopy: false,
          saveSettings: false,
        }
  );

  const [password, setPassword] = useState();
  const [passwordShouldUpdate, setpasswordShouldUpdate] = useState(true);

  function updateSettings(event) {
    setSettings((oldSettings) => {
      const name = event.target.name;

      togglePasswordBasedOnOptions(name);

      const value =
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;

      togglePasswordBasedOnLength(name, value);

      if (allIncludeFieldsUnchecked(name, value)) {
        return oldSettings;
      }

      return { ...oldSettings, [name]: value };
    });
  }

  function togglePasswordBasedOnOptions(name) {
    if (name === "autoCopy" || name === "saveSettings") {
      setpasswordShouldUpdate(false);
    } else {
      setpasswordShouldUpdate(true);
    }
  }

  function togglePasswordBasedOnLength(name, value) {
    if (!lengthIsValid(settings.length)) {
      setpasswordShouldUpdate(false);
    }
    if (name === "length" && !lengthIsValid(value)) {
      setpasswordShouldUpdate(false);
    } else if (name === "length" && lengthIsValid(value)) {
      setpasswordShouldUpdate(true);
    }
  }

  function allIncludeFieldsUnchecked(name, value) {
    const includeFields = ["lowercase", "uppercase", "numbers", "symbols"];
    return (
      includeFields.includes(name) &&
      includeFields.every((field) =>
        field === name ? value === false : settings[field] === false
      )
    );
  }

  useEffect(() => {
    if (passwordShouldUpdate) {
      setPassword(generatePassword(settings));
    }

    if (settings.saveSettings) {
      if (!lengthIsValid(settings.length)) {
        localStorage.setItem(
          "settings",
          JSON.stringify({ ...settings, length: 16 })
        );
      } else {
        localStorage.setItem("settings", JSON.stringify(settings));
      }
    } else if (localStorage.getItem("settings")) {
      localStorage.removeItem("settings");
    }
  }, [settings]);

  return (
    <main>
      <Display
        password={password}
        copy={copyToClipboard}
        generatePassword={() => {
          if (lengthIsValid(settings.length)) {
            setPassword(generatePassword(settings));
          }
        }}
      />
      <Strength password={password} />
      <Configuration settings={settings} updateSettings={updateSettings} />
    </main>
  );
}

export default PasswordGenerator;
