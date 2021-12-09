let text = require("fs").readFileSync("input.txt").toString().split("\n");

let count = 0;

for (const line of text) {
  const first = line.split(" | ")[0];
  const second = line.split(" | ")[1];
  for (const item of second.split(" ")) {
    if (
      item.length === 2 ||
      item.length === 3 ||
      item.length === 4 ||
      item.length === 7
    ) {
      count++;
    }
  }
}

console.log(count);
