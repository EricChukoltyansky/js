const foods1 = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foods2 = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

let asc = foods1.sort((a,b) => a.length - b.length)
let desc = foods2.sort((a,b) => b.length - a.length)

console.log(asc)
console.log(desc)