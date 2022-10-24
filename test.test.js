const morseRegex2 = /^[.-]{1,6}(?:[ ]+[.-]{1,6})*(?:[ ]\/[ ]+[.-]{1,6}(?:[ ]+[.-]{1,6})*)*$/;
const morseAlphabet2 = new Map([
    ["A", ".-"],
    ["B", "-..."],
    ["C", "-.-."],
    ["D", "-.."],
    ["E", "."],
    ["F", "..-."],
    ["G", "--."],
    ["H", "...."],
    ["I", ".."],
    ["J", ".---"],
    ["K", "-.-"],
    ["L", ".-.."],
    ["M", "--"],
    ["N", "-."],
    ["O", "---"],
    ["P", ".--."],
    ["Q", "--.-"],
    ["R", ".-."],
    ["S", "..."],
    ["T", "-"],
    ["U", "..-"],
    ["V", "...-"],
    ["W", ".--"],
    ["X", "-..-"],
    ["Y", "-.--"],
    ["Z", "--.."],
    ["1", ".----"],
    ["2", "..---"],
    ["3", "...--"],
    ["4", "....-"],
    ["5", "....."],
    ["6", "-...."],
    ["7", "--..."],
    ["8", "---.."],
    ["9", "----."],
    ["0", "-----"],
    [".", ".-.-.-"],
    [",", "--..--"],
    ["?", "..--.."],
    ["'", ".----."],
    ["-", "-....-"],
    ["/", "-..-."],
    ["(", "-.--."],
    [")", "-.--.-"],
    ['"', ".-..-."],
    ["@", ".--.-."],
    ["=", "-...-"],
    ["&", ".-..."],
    ["+", ".-.-."],
    ["!", "-.-.--"],
    [" ", "/"],
]);

const alphabetMorse2 = new Map([]);
morseAlphabet2.forEach((value, key) => {
    alphabetMorse2.set(value, key);
});

const fromMorseToText2 = (text) => {
    if (!text.match(morseRegex2)) {
        return "Check your morse code for errors";
    }
    const output = text
        .split(" ")
        .map((char) => {
            return alphabetMorse2.get(char);
        })
        .join("");

    return output;
};

const fromTextToMorse2 = (text) => {
    if (text.match(morseRegex2)) {
        return "Input is not appropriate";
    }
    const output = text
        .split("")
        .map((char) => {
            return morseAlphabet2.get(char.toUpperCase());
        })
        .join(" ")
        .replace("/ /", " ");

    return output;
};

describe("Morse to English", () => {
    test("should return 'JOAO'", () => {
        expect(fromMorseToText2(".--- --- .- ---")).toBe("JOAO");
    });
    test("should return 'JOAO PEDRO'", () => {
        expect(fromMorseToText2(".--- --- .- --- / .--. . -.. .-. ---")).toBe("JOAO PEDRO");
    });
    test("should return 'JOAO PEDRO %'", () => {
        expect(fromMorseToText2(".--- --- .- --- / .--. . -.. .-. --- / -.--. -.--.-")).toBe("JOAO PEDRO ()");
    });
    test("should return 'erro message", () => {
        expect(fromMorseToText2("diburish")).toBe("Check your morse code for errors");
    });
});

describe("English to Morse", () => {
    test("should return 'JOAO'", () => {
        expect(fromTextToMorse2("JOAO")).toBe(".--- --- .- ---");
    });
    test("should return 'JOAO PEDRO'", () => {
        expect(fromTextToMorse2("JOAO PEDRO")).toBe(".--- --- .- --- / .--. . -.. .-. ---");
    });
    test("should return 'JOAO PEDRO %'", () => {
        expect(fromTextToMorse2("JOAO PEDRO ()")).toBe(".--- --- .- --- / .--. . -.. .-. --- / -.--. -.--.-");
    });
    test("should return 'erro message", () => {
        expect(fromTextToMorse2(".--- --- .- ---")).toBe("Input is not appropriate");
    });
});
