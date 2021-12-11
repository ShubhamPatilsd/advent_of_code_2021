const text = require("fs").readFileSync("input.txt").toString().split("\n");

let count = 0;
for (let i = 0; i < text.length; i++) {
  text[i];
  for (let j = 0; j < text[i].length; j++) {
    // const smol_text = text[i].split("");
    let greater = true;
    // try {
    try {
      parseInt(text[i - 1].split("")[j]);
      if (
        parseInt(text[i].split("")[j]) >= parseInt(text[i - 1].split("")[j])
      ) {
        greater = false;
      }
    } catch (err) {}

    try {
      parseInt(text[i + 1].split("")[j]);
      if (
        parseInt(text[i].split("")[j]) >= parseInt(text[i + 1].split("")[j])
      ) {
        greater = false;
      }
    } catch (err) {}

    try {
      parseInt(text[i].split("")[j - 1]);
      if (
        parseInt(text[i].split("")[j]) >= parseInt(text[i].split("")[j - 1])
      ) {
        greater = false;
      }
    } catch (err) {}

    try {
      parseInt(text[i].split("")[j + 1]);
      if (
        parseInt(text[i].split("")[j]) >= parseInt(text[i].split("")[j + 1])
      ) {
        greater = false;
      }
    } catch (err) {}

    if (greater) {
      count += 1 + parseInt(text[i].split("")[j]);
    }
  }
}

console.log(count);
