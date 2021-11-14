// Write a function that will receive an array of strings and will return a new
// array containing all the lengths of all the strings in the array it got as a
// parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

// let wordLength = function(arr) {
//     length=0;
//     for (let i in arr) {
//      length++;
//     }
//     return length;
// }

let wordLength = (arr) => {
  let length = 0;
  while (arr.length) {
    for (let i in arr) {
      length++;
    }
  }
  return length;
};
