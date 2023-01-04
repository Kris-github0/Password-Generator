import {
  buildCharacterSet,
  getRandomCharacter,
  characterIsSuccessive,
  onlyCharacterLeftIsSuccessive,
  copyToClipboard,
} from "./helpers.js";

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

export default generatePassword;
