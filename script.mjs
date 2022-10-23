import { morseAlphabet, alphabetMorse } from "./morseData.mjs";

const getInput = document.getElementById("input");
const getOutput = document.getElementById("output");

//Select an option
const reflex = (event) => {
    getInput.value = "";
    getOutput.value = "";
    let str = "";
    switch (event.target.value) {
        case "Morse":
            str = "English";
            break;
        case "English":
            str = "Morse";
            break;
        case "Auto-Detect":
            str = "Auto-Detect";
            break;
    }

    document.getElementById("selected").innerText = str;
};

const getOption = document.getElementById("select");
getOption.addEventListener("change", reflex);

//Translate Button
const morseRegex = /^[.-]{1,6}(?:[ ]+[.-]{1,6})*(?:[ ]\/[ ]+[.-]{1,6}(?:[ ]+[.-]{1,6})*)*$/;

const translate = (event) => {
    switch (getOption.value) {
        case "Morse":
            fromMorseToText(getInput.value);
            break;
        case "English":
            fromTextToMorse(getInput.value);
            break;
        case "Auto-Detect":
            autoDetect(getInput.value);
            break;
        default:
            window.alert("Select an Option");
    }
};

const fromMorseToText = (text) => {
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
};

const fromTextToMorse = (text) => {
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
};

const autoDetect = (text) => {
    if (text.match(morseRegex)) {
        fromMorseToText(text);
    } else {
        fromTextToMorse(text);
    }
};

const getTranslate = document.getElementById("translate");
getTranslate.addEventListener("click", translate);

//Reset button

const getReset = document.getElementById("reset");
getReset.addEventListener("click", () => {
    getInput.value = "";
    getOutput.value = "";
});
