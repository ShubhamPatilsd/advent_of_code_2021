const fs = require("fs");
const data = fs
  .readFileSync("./input.txt", { encoding: "utf-8", flag: "r" })
  .split("\n");

let gamma = "";
let epsilon = "";

for (let j = 0; j < 12; j++) {
  let ones = 0;
  let zeroes = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].charAt(j) === "0") {
      zeroes++;
    } else {
      ones++;
    }
  }
  if (ones > zeroes) {
    gamma += "1";
    epsilon += "0";
  } else {
    epsilon += "1";
    gamma += "0";
  }
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
