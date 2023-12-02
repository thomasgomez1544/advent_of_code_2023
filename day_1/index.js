const array = generateArray();
calculateNumbers(array);

const filePath =
  "C:/Users/thoma/Documents/Code/advent_of_code/2023/day_1/data.txt";

const testFilePath =
  "C:/Users/thoma/Documents/Code/advent_of_code/2023/day_1/test_data.txt";

function generateArray(testFilePath) {
  const fs = require("fs");
  const fileContent = fs.readFileSync(filePath, "utf8");
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
