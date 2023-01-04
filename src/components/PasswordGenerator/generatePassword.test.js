import generatePassword from "./generatePassword";

describe("If charactersAvailable < charactersNeeded return an empty string", () => {
  test("No duplicates, numbers only and length > 10 should return an empty string", () => {
    const settings = {
      length: 11,
      lowercase: false,
      uppercase: false,
      numbers: true,
      symbols: false,
      duplicateCharacters: true,
      similarCharacters: false,
      successiveCharacters: false,
      autoCopy: false,
      saveSettings: false,
    };

    const password = generatePassword(settings);

    expect(password).toBe("");
  });

  test("No duplicates, lowercase only and length > 26 should return an empty string", () => {
    const settings = {
      length: 27,
      lowercase: true,
      uppercase: false,
      numbers: false,
      symbols: false,
      duplicateCharacters: true,
      similarCharacters: false,
      successiveCharacters: false,
      autoCopy: false,
      saveSettings: false,
    };

    const password = generatePassword(settings);

    expect(password).toBe("");
  });

  test("No duplicates, uppercase only and length > 26 should return an empty string", () => {
    const settings = {
      length: 27,
      lowercase: false,
      uppercase: true,
      numbers: false,
      symbols: false,
      duplicateCharacters: true,
      similarCharacters: false,
      successiveCharacters: false,
      autoCopy: false,
      saveSettings: false,
    };

    const password = generatePassword(settings);

    expect(password).toBe("");
  });

  test("No duplicates, symbols only and length > 32 should return an empty string", () => {
    const settings = {
      length: 33,
      lowercase: false,
      uppercase: true,
      numbers: false,
      symbols: false,
      duplicateCharacters: true,
      similarCharacters: false,
      successiveCharacters: false,
      autoCopy: false,
      saveSettings: false,
    };

    const password = generatePassword(settings);

    expect(password).toBe("");
  });
});

describe("Valid settings should return a password with the specified length", () => {
  test("", () => {
    const settings = {
      length: 50,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true,
      duplicateCharacters: false,
      similarCharacters: false,
      successiveCharacters: false,
      autoCopy: false,
      saveSettings: false,
    };

    const password = generatePassword(settings);

    expect(password.length).toBe(50);
  });

  test("", () => {
    const settings = {
      length: 30,
      lowercase: true,
      uppercase: false,
      numbers: true,
      symbols: true,
      duplicateCharacters: true,
      similarCharacters: false,
      successiveCharacters: false,
      autoCopy: false,
      saveSettings: false,
    };

    const password = generatePassword(settings);

    expect(password.length).toBe(30);
  });

  test("", () => {
    const settings = {
      length: 100,
      lowercase: false,
      uppercase: false,
      numbers: true,
      symbols: false,
      duplicateCharacters: false,
      similarCharacters: false,
      successiveCharacters: false,
      autoCopy: false,
      saveSettings: false,
    };

    const password = generatePassword(settings);

    expect(password.length).toBe(100);
  });
});

describe("If duplicate characters disallowed, none should be found in the password", () => {
  test("", () => {
    const settings = {
      length: 90,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true,
      duplicateCharacters: true,
      similarCharacters: false,
      successiveCharacters: false,
      autoCopy: false,
      saveSettings: false,
    };

    let password = generatePassword(settings);
    password = password.split("");

    expect(new Set(password).size).toBe(password.length);
  });

  test("", () => {
    const settings = {
      length: 50,
      lowercase: false,
      uppercase: true,
      numbers: true,
      symbols: true,
      duplicateCharacters: true,
      similarCharacters: false,
      successiveCharacters: false,
      autoCopy: false,
      saveSettings: false,
    };

    let password = generatePassword(settings);
    password = password.split("");

    expect(new Set(password).size).toBe(password.length);
  });
});

describe("Similar characters", () => {
  test.each([
    { char: "1", similarChar: "l" },
    { char: "l", similarChar: "1" },
    { char: "0", similarChar: "O" },
    { char: "O", similarChar: "0" },
  ])(
    "$char and $similarChar should not be present in the password",
    ({ char, similarChar }) => {
      const settings = {
        length: 90,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        duplicateCharacters: true,
        similarCharacters: true,
        successiveCharacters: false,
        autoCopy: false,
        saveSettings: false,
      };
      let noSimilarCharacters = true;

      let password = generatePassword(settings).split("");
      if (password.includes(char) && password.includes(similarChar)) {
        noSimilarCharacters = false;
      }

      expect(noSimilarCharacters).toBe(true);
    }
  );
});

test("If successive characters disallowed, none should be found in the password", () => {
  const settings = {
    length: 100,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    duplicateCharacters: false,
    similarCharacters: false,
    successiveCharacters: true,
    autoCopy: false,
    saveSettings: false,
  };

  let successiveCharacterPresent = false;
  const password = generatePassword(settings);

  for (let i = 1; i < password.length; i++) {
    if (password.charCodeAt(i) === password.charCodeAt(i - 1) + 1) {
      successiveCharacterPresent = true;
      break;
    }
  }

  expect(successiveCharacterPresent).toBe(false);
});

test("An empty character set should return an empty string", () => {
  const settings = {
    length: 16,
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
    duplicateCharacters: true,
    similarCharacters: false,
    successiveCharacters: false,
    autoCopy: false,
    saveSettings: false,
  };

  const password = generatePassword(settings);

  expect(password).toBe("");
});
