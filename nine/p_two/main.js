let text = require("fs").readFileSync("input.txt").toString().split("\n");

// let count = 0;
let pointInfo = [];
for (let i = 0; i < text.length; i++) {
  // text[i];
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
      // count += 1 + parseInt(text[i].split("")[j]);
      pointInfo.push([j, i]);
    }
  }
}

// console.log(pointInfo);

// for (let line = 0; line < text.length; line++) {
//   text[line] = text[line].replaceAll("9", " ");
// }

function checkNext(j, i) {
  let count = 0;
  let addSelf = text[i][j] === "X" ? 0 : 1;
  if (text[i][j] === "9" || text[i][j] === "X") {
    return 0;
  }

  let temp_str = text[i].split("");
  temp_str[j] = "X";
  text[i] = temp_str.join("");

  // console.log(text);

  if (i === 0 && j === 0) {
    count += checkNext(j, i + 1);
    count += checkNext(j + 1, i);
  } else if (i === 0 && j === text[i].length - 1) {
    count += checkNext(j - 1, i);
    count += checkNext(j, i + 1);
  } else if (i === text.length - 1 && j === 0) {
    count += checkNext(j+1, i);
    count += checkNext(j, i - 1);
  } else if (i === text.length - 1 && j === text[i].length - 1) {
    count += checkNext(j - 1, i);
    count += checkNext(j, i - 1);
  } else if (i === 0) {
    count += checkNext(j,i+1);
    count += checkNext(j+1, i);
    count += checkNext(j-1, i);
  } else if (i === text.length - 1) {
    count += checkNext(j, i - 1);
    count += checkNext(j+1, i);
    count += checkNext(j-1, i);

  } else if (j === 0) {
    count += checkNext(j+1, i);
    count += checkNext(j, i+1);
    count += checkNext(j, i-1);
  } else if (j === text[i].length - 1) {
    count += checkNext(j-1, i);
    count += checkNext(j, i+1);
    count += checkNext(j, i-1);
  }else{
    count += checkNext(j, i + 1);
  
 
    count += checkNext(j, i - 1);
  

 
  
    count += checkNext(j + 1, i);
 

 
    count += checkNext(j - 1, i);
  
    count += checkNext(j, i + 1);
  }

  

  return count + 1;
}

let scores = [];
console.log(pointInfo);

for (const point of pointInfo) {
  const x = point[0];
  const y = point[1];
  

  scores.push(checkNext(x, y));
  
}

console.log(text);
scores.sort(function (a, b) {
  return a - b;
});
scores.reverse();

console.log(scores);

console.log(scores[0] * scores[1] * scores[2]);
