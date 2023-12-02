const filePath =
  "C:/Users/thoma/Documents/Code/advent_of_code/2023/day_1/data.txt";

const testFilePath =
  "C:/Users/thoma/Documents/Code/advent_of_code_2023/day_1/test_data.txt";

calculateNumbers(replaceNumbers(generateArray(filePath)));

function generateArray(path) {
  const fs = require("fs");
  const fileContent = fs.readFileSync(path, "utf8");
  const dataArray = fileContent.split(/\r?\n/);
  const filteredArray = dataArray.filter((line) => line.trim() !== "");
  return filteredArray;
}

function calculateNumbers(array) {
  numArray = [];
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    const string = array[i];
    let firstNumberFound = false;
    let secondNumberFound = false;
    let forwardIterator = 0;
    let reverseIterator = string.length;
    let digitArray = [];
    while (!firstNumberFound) {
      if (isNaN(string[forwardIterator])) {
        forwardIterator++;
      } else {
        digitArray.push(string[forwardIterator]);
        firstNumberFound = true;
      }
    }
    while (!secondNumberFound) {
      if (isNaN(string[reverseIterator])) {
        reverseIterator--;
      } else {
        digitArray.push(string[reverseIterator]);
        secondNumberFound = true;
      }
    }
    let combinedDigits = Number(digitArray[0] + digitArray[1]);
    numArray.push(combinedDigits);
  }
  numArray.forEach((element) => {
    sum += element;
  });
  console.log(sum);
}

function replaceNumbers(array) {
  const spelledOutNums = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const replacedNums = [
    "one1one",
    "two2two",
    "three3three",
    "four4four",
    "five5five",
    "six6six",
    "seven7seven",
    "eight8eight",
    "nine9nine",
  ];
  let newArray = [];
  array.forEach((stringElement) => {
    for (let i = 0; i < spelledOutNums.length; i++) {
      stringElement = stringElement.replace(
        new RegExp(spelledOutNums[i], "g"),
        replacedNums[i]
      );
    }
    newArray.push(stringElement);
  });
  return newArray;
}
