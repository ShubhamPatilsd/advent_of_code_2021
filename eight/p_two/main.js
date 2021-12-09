let text = require("fs").readFileSync("input.txt").toString().split("\n");

let count = 0;

for (const line of text) {
  const first = line.split(" | ")[0].split(" ");
  const second = line.split(" | ")[1].split(" ");

  let numberInfo = {};

  for (const item of first) {
    if (item.length === 2) {
      numberInfo[1] = item;
    } else if (item.length === 3) {
      numberInfo[7] = item;
    } else if (item.length === 4) {
      numberInfo[4] = item;
    } else if (item.length === 7) {
      numberInfo[8] = item;
    }
  }

  let six_arr = first.filter((item) => {
    return item.length === 6;
  });

  for (const thing of six_arr) {
    if (
      !(
        thing.indexOf(numberInfo[1][0]) > -1 &&
        thing.indexOf(numberInfo[1][1]) > -1
      )
    ) {
      numberInfo[6] = thing;
      six_arr = six_arr.filter((thingy) => {
        return thingy !== thing;
      });
      break;
    }
  }

  for (const thing of six_arr) {
    let YOOOO = true;
    for (let i = 0; i < numberInfo[4].length; i++) {
      if (thing.indexOf(numberInfo[4].split("")[i]) === -1) {
        YOOOO = false;
        break;
      }
    }
    if (YOOOO) {
      numberInfo[9] = thing;
    } else {
      numberInfo[0] = thing;
    }
  }

  let five_arr = first.filter((bruh) => {
    return bruh.length === 5;
  });

  for (const lol of five_arr) {
    if (
      lol.indexOf(numberInfo[1][0]) > -1 &&
      lol.indexOf(numberInfo[1][1]) > -1
    ) {
      numberInfo[3] = lol;
      five_arr = five_arr.filter((thing) => {
        return thing !== lol;
      });
      break;
    }
  }

  for (const lol of five_arr) {
    const new_string =
      lol +
      (lol.indexOf(numberInfo[1][0]) > -1
        ? numberInfo[1][1]
        : numberInfo[1][0]);
    if (
      numberInfo[9].split("").sort().join("") ===
      new_string.split("").sort().join("")
    ) {
      numberInfo[5] = lol;
    } else {
      numberInfo[2] = lol;
    }
  }

  let new_temp_arr = {};
  for (const yay in numberInfo) {
    new_temp_arr[numberInfo[yay].split("").sort().join("")] = yay;
  }

  numberInfo = new_temp_arr;

  let newer_string = "";

  for (const number of second) {
    newer_string += parseInt(numberInfo[number.split("").sort().join("")]);
  }

  count += parseInt(newer_string);
}

console.log(count);
