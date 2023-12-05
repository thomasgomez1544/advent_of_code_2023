const filePath = "day_3/data.txt";

const testFilePath = "day_3/test_data.txt";

const stringArray = generateArray(testFilePath);
replaceNums(stringArray);

function generateArray(path) {
  const fs = require("fs");
  const fileContents = fs.readFileSync(path, "utf8");
  let stringArray = fileContents.trim().split(/\r?\n/);
  return (stringArray = stringArray.map((element) => element.split("")));
}

function replaceNums(array) {
  array.map((element) => {
    let tepNumberStore = [];
    for (let i = 0; i < element.length; i++) {
      if (element[i] === ".") {
        if (tepNumberStore.length === 0) {
          continue;
        }
        let newNumber = tepNumberStore.join("");
        for (let j = i - newNumber.length; j < i; j++) {
          element[j] = Number(newNumber);
        }
        tepNumberStore = [];
      } else if (isNaN(element[i])) {
        continue;
      } else {
        tepNumberStore.push(element[i]);
      }
    }
    return element;
  });
}

function findPartNums(array) {}
