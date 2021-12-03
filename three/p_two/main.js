const fs = require("fs");
let data = fs
  .readFileSync("./input.txt", { encoding: "utf-8", flag: "r" })
  .split("\n");

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

  data = data.filter((number) => {
    if (ones > zeroes) {
      return number.charAt(j) === "1";
    } else if (zeroes > ones) {
      return number.charAt(j) === "0";
    } else if (zeroes === ones) {
      return number.charAt(j) === "1";
    }
  });
}

const oxy = parseInt(
  data.filter((num) => {
    return num.charAt(num.length - 1) === "1";
  })[0],
  2
);

data = fs
  .readFileSync("./input.txt", { encoding: "utf-8", flag: "r" })
  .split("\n");
//scan each column
for (let i = 0; i < 12; i++) {
  let ones = 0;
  let zeroes = 0;
  //count
  for (let z = 0; z < data.length; z++) {
    if (data[z].charAt(i) === "0") {
      zeroes++;
    } else {
      ones++;
    }
  }

  data = data.filter((number) => {
    if (data.length == 1) {
      return true;
    }
    if (zeroes > ones) {
      return number.charAt(i) === "1";
    }
    if (ones > zeroes) {
      return number.charAt(i) === "0";
    }
    if (ones === zeroes) {
      return number.charAt(i) === "0";
    }
  });
}

console.log(data);

const scrubber = parseInt(data[0], 2);

console.log(scrubber);

console.log(oxy * scrubber);
