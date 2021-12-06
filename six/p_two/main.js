let text = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(",")
  .map(Number);

data = {};

for (let i = 0; i <= 8; i++) {
  data[i] = 0;
}

console.log(data);

for (let item = 0; item < text.length; item++) {
  data[text[item]]++;
}

console.log(data);

for (let i = 1; i <= 256; i++) {
  let bebes = data[0];
  for (let i = 1; i <= 8; i++) {
    data[i - 1] = data[i];
  }
  data[8] = bebes;
  data[6] += bebes;
}
let sum = 0;
for (let i = 0; i <= 8; i++) {
  sum += data[i];
}
console.log(sum);
