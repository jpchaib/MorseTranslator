import { fromMorseToText, fromTextToMorse, morseRegex } from "./logic.mjs";

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
