"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countVowels = exports.capitalizeFirstLetter = exports.countCharacters = exports.reverseString = void 0;
const reverseString = (str) => {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
};
exports.reverseString = reverseString;
const countCharacters = (str) => {
    let splitString = str.split("");
    // return splitString.length;
    return str.replace(/\s/g, "").length;
};
exports.countCharacters = countCharacters;
const capitalizeFirstLetter = (str) => {
    if (str.length === 0)
        return str;
    return str.charAt(0) + str.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const countVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    // let chars = str.split("");
    // let vowelCount = chars.filter((char) => vowels.includes(char)).length;
    return str.split("").filter((char) => vowels.includes(char)).length;
};
exports.countVowels = countVowels;
