let text = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(",")
  .map(Number);

let lowest = 0;
for (let i = 0; i < text.length; i++) {
  let sum = 0;
  for (let j = 0; j < text.length; j++) {
    sum += Math.abs(text[j] - text[i]);
  }
  if (sum < lowest || i === 0) {
    lowest = sum;
  }
}
console.log(lowest);
