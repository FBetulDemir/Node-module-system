export const reverseString = (str: string): string => {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

export const countCharacters = (str: string): number => {
  let splitString = str.split("");
  // return splitString.length;
  return str.replace(/\s/g, "").length;
};

export const capitalizeFirstLetter = (str: string): string => {
  if (str.length === 0) return str;
  return str.charAt(0) + str.slice(1);
};

export const countVowels = (str: string): number => {
  const vowels = ["a", "e", "i", "o", "u"];
  // let chars = str.split("");
  // let vowelCount = chars.filter((char) => vowels.includes(char)).length;
  return str.split("").filter((char) => vowels.includes(char)).length;
};

console.log(reverseString("hej"));
