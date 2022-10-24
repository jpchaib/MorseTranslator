import { morseAlphabet, alphabetMorse } from "./morseData.mjs";

export const morseRegex = /^[.-]{1,6}(?:[ ]+[.-]{1,6})*(?:[ ]\/[ ]+[.-]{1,6}(?:[ ]+[.-]{1,6})*)*$/;
const getOutput = document.getElementById("output");

export const fromMorseToText = (text) => {
    if (!text.match(morseRegex)) {
        window.alert("Check your morse code for errors");
    }
    const output = text
        .split(" ")
        .map((char) => {
            return alphabetMorse.get(char);
        })
        .join("");

    getOutput.value = output;
    return output;
};

export const fromTextToMorse = (text) => {
    if (text.match(morseRegex)) {
        window.alert("Input is not appropriate");
    }
    const output = text
        .split("")
        .map((char) => {
            return morseAlphabet.get(char.toUpperCase());
        })
        .join(" ")
        .replace("/ /", " ");

    getOutput.value = output;
    return output;
};
