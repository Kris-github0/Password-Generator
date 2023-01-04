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

export {
  onlyCharacterLeftIsSuccessive,
  characterIsSuccessive,
  getRandomCharacter,
  buildCharacterSet,
  copyToClipboard,
  lengthIsValid,
};
