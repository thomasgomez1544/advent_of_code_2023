const filePath = "day_2/data.txt";

const testFilePath = "day_2/test_data.txt";

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
  let sumOfPowers = 0;
  gameObj.forEach((game, index) => {
    let highestRedCubeCount = 0;
    let highestGreenCubeCount = 0;
    let highestBlueCubeCount = 0;
    game.round.forEach((roundElement) => {
      if (roundElement.red > highestRedCubeCount) {
        highestRedCubeCount = roundElement.red;
      }
      if (roundElement.green > highestGreenCubeCount) {
        highestGreenCubeCount = roundElement.green;
      }
      if (roundElement.blue > highestBlueCubeCount) {
        highestBlueCubeCount = roundElement.blue;
      }
    });
    powerOfCubes =
      highestRedCubeCount * highestGreenCubeCount * highestBlueCubeCount;
    sumOfPowers += powerOfCubes;
  });
  console.log(sumOfPowers);
}
