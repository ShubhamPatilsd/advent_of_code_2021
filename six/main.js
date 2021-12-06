let text = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(",")
  .map(Number);

for (let i = 1; i <= 80; i++) {
  const text_length = text.length;
  for (let fish = 0; fish < text_length; fish++) {
    if (text[fish] === 0) {
      text[fish] = 6;
      text.push(8);
    } else {
      text[fish] = text[fish] - 1;
    }
  }
}
console.log(text.length);
