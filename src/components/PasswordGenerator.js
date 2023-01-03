import React, { useState, useEffect } from "react";
import Display from "./Display/Display";
import Strength from "./Strength";
import Configuration from "./Configuration";

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

      if (allInlcudeFieldsUnchecked(name, value)) {
        return oldSettings;
      }

      return { ...oldSettings, [name]: value };
    });
  }

  function generatePassword(settings) {
    let password = "";

    const length = Number(settings.length);
    let numberOfCharactersNeeded = length;

    const similar = {
      1: "l",
      l: "1",
      0: "O",
      O: "0",
    };

    let charSet = buildCharacterSet(settings);
    let numberOfcharactersAvailable = charSet.length;

    let IMPOSSIBLE =
      settings.duplicateCharacters &&
      numberOfcharactersAvailable < numberOfCharactersNeeded;

    if (IMPOSSIBLE) {
      return "";
    }

    while (password.length !== length) {
      const character = getRandomCharacter(charSet);

      if (
        settings.successiveCharacters &&
        characterIsSuccessive(password, character)
      ) {
        if (onlyCharacterLeftIsSuccessive(charSet)) {
          return generatePassword(settings);
        } else {
          continue;
        }
      }

      if (settings.duplicateCharacters) {
        charSet = charSet.filter((char) => char !== character);
        numberOfCharactersNeeded--;
      }

      if (settings.similarCharacters && similar[character]) {
        charSet = charSet.filter((char) => char !== similar[character]);
      }

      numberOfcharactersAvailable = charSet.length;
      IMPOSSIBLE =
        settings.duplicateCharacters &&
        numberOfcharactersAvailable < numberOfCharactersNeeded;

      if (IMPOSSIBLE) {
        return "";
      }

      password += character;
    }

    if (settings.autoCopy) {
      copyToClipboard(password);
    }

    return password;
  }

  function togglePasswordBasedOnOptions(name) {
    if (name === "autoCopy" || name === "saveSettings") {
      setpasswordShouldUpdate(false);
    } else {
      setpasswordShouldUpdate(true);
    }
  }

  function allInlcudeFieldsUnchecked(name, value) {
    const includeFields = ["lowercase", "uppercase", "numbers", "symbols"];
    return (
      includeFields.includes(name) &&
      includeFields.every((field) =>
        field === name ? value === false : settings[field] === false
      )
    );
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

  function onlyCharacterLeftIsSuccessive(characterSet) {
    return characterSet.length === 1;
  }

  function characterIsSuccessive(string, character) {
    return character.charCodeAt(0) === string.charCodeAt(string.length - 1) + 1;
  }

  function getRandomCharacter(characterSet) {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
  }

  function buildCharacterSet(settings) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "`!\"£$%^&*()_-=+[]{}:;'@#~,.<>/?\\";

    const characterSet = `${settings.lowercase ? lowercase : ""}${
      settings.uppercase ? uppercase : ""
    }${settings.numbers ? numbers : ""}${settings.symbols ? symbols : ""}`;

    return characterSet.split("");
  }

  function copyToClipboard(password) {
    navigator.clipboard.writeText(password);
  }

  function lengthIsValid(length) {
    if (
      length === "" ||
      Number(length) <= 0 ||
      Number(length) > 100 ||
      !Number.isInteger(Number(length)) ||
      length[0] === "0" ||
      length.length > 3
    ) {
      return false;
    }
    return true;
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
