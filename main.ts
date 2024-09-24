import path from "path";
import fs from "fs";

import {
  reverseString,
  countCharacters,
  capitalizeFirstLetter,
  countVowels,
} from "./stringUtils";

const nodeSentence: string =
  "learning Node.js is important because it allows you to build scalable server-side applications.";
console.log(reverseString(nodeSentence));
console.log(countCharacters(nodeSentence));

const reversedSentence: string = reverseString(nodeSentence);

// using fs module to writes the reversed sentence into reversed.txt
fs.writeFileSync("reversed.txt", reversedSentence);

// using path module to log the full path of the reversed.txt file
const filePath: string = path.join(__dirname, "reversed.txt");
console.log(filePath);
