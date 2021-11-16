const numbers1 = [1, -5, 666, 2, 400, 11];
const numbers2 = [1, -5, 666, 2, 400, 11];

let desc = numbers1.sort((a, b) => a - b);
let asc = numbers2.sort((x, y) => y - x);

console.log(desc);
console.log(asc);
