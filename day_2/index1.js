const filePath =
  "C:/Users/thoma/Documents/Code/advent_of_code/2023/day_2/data.txt";

const testFilePath =
  "C:/Users/thoma/Documents/Code/advent_of_code_2023/day_2/test_data.txt";

// Example desired data
// const gameObj = [
//   {
//     id: 1,
//     round: [
//       { red: 4, green: 0, blue: 3 },
//       { red: 1, green: 2, blue: 6 },
//       { red: 0, green: 2, blue: 0 },
//     ],
//   },
//   {
//     id: 2,
//     round: [
//       { red: 0, green: 2, blue: 1 },
//       { red: 1, green: 3, blue: 4 },
//       { red: 0, green: 1, blue: 1 },
//     ],
//   },
// ];

const totalRedCubes = 12;
const totalGreenCubes = 13;
const totalBlueCubes = 14;

checkrounds(generateArray(filePath));

function generateArray(path) {
  const fs = require("fs");
  const fileContents = fs.readFileSync(path, "utf8");
  const games = fileContents.trim().split("\n");
  const gameObj = [];

  games.forEach((game, index) => {
    const rounds = game
      .trim()
      .replace(/Game \d+: /, "")
      .split(";")
      .map((round) => {
        const counts = { red: 0, green: 0, blue: 0 };
        round
          .trim()
          .split(",")
          .forEach((item) => {
            const [quantity, color] = item.trim().split(" ");
            counts[color] += parseInt(quantity, 10);
          });
        return counts;
      });

    gameObj.push({
      id: index + 1,
      round: rounds,
    });
  });

  return gameObj;
}

function checkrounds(gameObj) {
  let sumOfId = 0;
  gameObj.forEach((element, index) => {
    let notValidRound = false;
    element.round.forEach((roundElement) => {
      if (roundElement.red > totalRedCubes) {
        notValidRound = true;
      }
      if (roundElement.green > totalGreenCubes) {
        notValidRound = true;
      }
      if (roundElement.blue > totalBlueCubes) {
        notValidRound = true;
      }
    });
    if (!notValidRound) {
      sumOfId += gameObj[index].id;
    }
  });
  console.log(sumOfId);
}
