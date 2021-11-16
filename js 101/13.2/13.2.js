// const foods1 = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// const foods2 = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// let asc = foods1.sort((a, b) => a.length - b.length);
// let desc = foods2.sort((a, b) => b.length - a.length);

// console.log(asc);
// console.log(desc);

const foods3 = [
  "sea bass",
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
const foods4 = [
  "sea bass",
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

foods3.sort((a, b) => {
  return a.localeCompare(b);
});

foods4.sort((a, b) => {
  return b.localeCompare(a);
});

console.log(foods3);
console.log(foods4);

const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

let longest = words.sort((a,b) => b.length-a.length)

console.log(longest);