let text = require("fs").readFileSync("input.txt").toString().split("\n");

// text[text.indexOf("")] = " ";
// console.log(text);

let instructions = [];

// console.log(text.indexOf(""), text.length);
for (let i = text.indexOf("") + 1; i < text.length; i++) {
  //   console.log(text[i]);
  instructions.push(
    `${text[i].split(" ")[text[i].split(" ").length - 1].split("=")[0]},${
      text[i].split(" ")[text[i].split(" ").length - 1].split("=")[1]
    }`
  );
  //   text.pop();
}

text = text.filter((word) => {
  if (word.indexOf("fold") !== -1 || word === "") {
    return false;
  }

  return true;
});

// console.log(text, instructions);

// // text = text.filter((item) => item !== "");

// // const y = text[text.length - 2]
// //   .split(" ")
// //   [text[text.length - 2].split(" ").length - 1].split("=")[1];
// // const x = text[text.length - 1]
// //   .split(" ")
// //   [text[text.length - 1].split(" ").length - 1].split("=")[1];

// // text.pop();
// // text.pop();

for (const item of instructions) {
  // for (let j = 0; j < 1; j++) {
  //   let item = instructions[j];
  console.log("item", item);
  for (let i = 0; i < text.length; i++) {
    if (item.split(",")[0] === "y") {
      let y = parseInt(item.split(",")[1]);
      if (parseInt(text[i].split(",")[1]) > y) {
        let temp_str = text[i].split(",");
        // abs not needed but i wanted to be sure
        temp_str[1] = y - Math.abs(parseInt(temp_str[1]) - y);
        // text[i] =
        text[i] = temp_str[0] + "," + temp_str[1];
      }
    } else if (item.split(",")[0] === "x") {
      let x = parseInt(item.split(",")[1]);

      if (parseInt(text[i].split(",")[0]) > x) {
        let temp_str = text[i].split(",");
        // abs not needed but i wanted to be sure
        temp_str[0] = x - Math.abs(parseInt(temp_str[0]) - x);
        // text[i] =
        text[i] = temp_str[0] + "," + temp_str[1];
      }
    }
  }
}
let firstFold = new Set();

for (const item of text) {
  firstFold.add(item);
}
console.log(text);

console.log(firstFold.size);
