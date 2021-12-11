const text = require("fs").readFileSync("input.txt").toString().split("\n");

let illegals = [];
let points = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

for (const line of text) {
  let opening = ["(", "[", "{", "<"];
  let closing = [")", "]", "}", ">"];

  let chars = [];
  for (const char of line) {
    if (opening.indexOf(char) > -1) {
      chars.push(char);
    } else {
      let pop = chars.pop();
      if (opening[closing.indexOf(char)] !== pop) {
        illegals.push(char);
        break;
      }
    }
  }
}

let sum = 0;
for (const illegal of illegals) {
  sum += points[illegal];
}
console.log(sum);
