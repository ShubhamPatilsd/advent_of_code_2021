const text = require("fs").readFileSync("input.txt").toString().split("\n");

let pointInfo = {};

for (const item in text) {
  for (const char in text[item]) {
    pointInfo[`${char},${item}`] = parseInt(text[item][char]);
  }
}

let count = 0;

function checker(x, y, points) {
  if (pointInfo[`${x},${y}`] > 9 && points.indexOf(`${x},${y}`) <= -1) {
    pointInfo[`${x},${y}`] = 0;
    count++;
    points.push(`${x},${y}`);
    if (pointInfo[`${x},${y + 1}`]) {
      //down
      pointInfo[`${x},${y + 1}`]++;
      checker(x, y + 1, points);
    }

    //up
    if (pointInfo[`${x},${y - 1}`]) {
      pointInfo[`${x},${y - 1}`]++;
      checker(x, y - 1, points);
    }

    //right
    if (pointInfo[`${x + 1},${y}`]) {
      pointInfo[`${x + 1},${y}`]++;
      checker(x + 1, y, points);
    }

    //left
    if (pointInfo[`${x - 1},${y}`]) {
      pointInfo[`${x - 1},${y}`]++;
      checker(x - 1, y, points);
    }

    // right-up diag
    if (pointInfo[`${x + 1},${y - 1}`]) {
      pointInfo[`${x + 1},${y - 1}`]++;
      checker(x + 1, y - 1, points);
    }

    // left-up diag
    if (pointInfo[`${x - 1},${y - 1}`]) {
      pointInfo[`${x - 1},${y - 1}`]++;
      checker(x - 1, y - 1, points);
    }

    // right-down diag

    if (pointInfo[`${x + 1},${y + 1}`]) {
      pointInfo[`${x + 1},${y + 1}`]++;
      checker(x + 1, y + 1, points);
    }

    // left-down diag

    if (pointInfo[`${x - 1},${y + 1}`]) {
      pointInfo[`${x - 1},${y + 1}`]++;
      checker(x - 1, y + 1, points);
    }
  }
}

for (let i = 1; i <= 100; i++) {
  for (let k = 0; k < text.length; k++) {
    for (let p = 0; p < text[k].length; p++) {
      pointInfo[`${p},${k}`]++;
    }
  }

  for (let k = 0; k < text.length; k++) {
    for (let p = 0; p < text[k].length; p++) {
      checker(p, k, []);
    }
  }
}
console.log(count);
