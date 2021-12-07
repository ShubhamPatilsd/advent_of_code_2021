let text = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(",")
  .map(Number);

let max = Math.max(...text);

let lowest = 0;

for (let j = 0; j <= max; j++) {
  let sum = 0;

  for (let i = 0; i < text.length; i++) {
    for (let k = 1; k <= Math.abs(text[i] - j); k++) {
      sum += k;
    }
  }

  if (sum < lowest || j === 0) {
    lowest = sum;
    lowest_num = j;
  }
}
console.log(lowest);
