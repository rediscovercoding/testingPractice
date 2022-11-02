function add(a, b) {
  return a + b;
}

function capitalize(string) {
  return `${string[0].toUpperCase() + string.slice(1)}`;
}

function reverse(string) {
  let reverseStringArr = [];
  for (let i = string.length; i >= 1; i--) {
    reverseStringArr.push(string[i - 1]);
  }
  return reverseStringArr.join("");
}

let calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

let caesarCipher = function (string) {
  let alphabetArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
    "A",
  ];

  let cipherArr = [];
  for (let i = 0; i < string.length; i++) {
    if (alphabetArr.includes(string[i])) {
      if (string[i] !== "z") {
        cipherArr.push(alphabetArr[alphabetArr.indexOf(string[i]) + 1]);
      } else {
        cipherArr.push("a");
      }
    } else {
      cipherArr.push(string[i]);
    }
  }
  return cipherArr.join("");
};

function analyzeArray(arr) {
  let sum = 0;
  arr.forEach((ele, i) => {
    sum = sum + ele;
  });
  let sorted = arr.sort((a, b) => a - b);

  let object = {
    average: sum / arr.length,
    min: sorted[0],
    max: sorted[arr.length - 1],
    length: arr.length,
  };
  return object;
}

export { add, capitalize, reverse, calculator, caesarCipher, analyzeArray };
