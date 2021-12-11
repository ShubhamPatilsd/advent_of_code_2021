let text = require("fs").readFileSync("input.txt").toString().split("\n");

let illegals = [];
let points = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4,
};

let opening = ["(", "[", "{", "<"];
let closing = [")", "]", "}", ">"];

let corrupted = [];

for (const line of text) {
  let chars = [];
  for (const char of line) {
    if (opening.indexOf(char) > -1) {
      chars.push(char);
    } else {
      let pop = chars.pop();
      if (opening[closing.indexOf(char)] !== pop) {
        illegals.push(char);
        corrupted.push(line);
        break;
      }
    }
  }
}

for (const corrupt of corrupted) {
  text = text.filter((line) => {
    if (line !== corrupt) {
      return true;
    }
  });
}

console.log(text);

let sums = [];

for (const line of text) {
  const chara = [];
  for (const char of line) {
    if (opening.indexOf(char) > -1) {
      chara.push(char);
    } else {
      chara.pop();
    }
  }

  let filler = "";

  // console.log(filler, chara);

  for (const remaining of chara) {
    filler += closing[opening.indexOf(remaining)];
  }

  filler = filler.split("").reverse().join("");
  let sum = 0;

  for (const item of filler) {
    sum = 5 * sum + points[item];
  }
  sums.push(sum);
}

sums.sort((a, b) => {
  return a - b;
});

function median(arr) {
  return arr[Math.floor(arr.length / 2)];
}

console.log(median(sums));
