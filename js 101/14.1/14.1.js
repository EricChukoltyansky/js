const grades = [10, 20, 30, 90, 50, 60, 70, 80, 40];

let max = grades.reduce((max, currVal) => {
  if (max < currVal) return currVal;
  return max;
});

console.log(max);

let evenSum = grades
  .filter((num) => !(num % 2))
  .reduce((a, b) => {
    return a + b;
  });

console.log(evenSum);

// const arr = [129, 139, 155, 176];

// sum all the elements of the array
// const sum = arr.reduce(function (accumulator, currentValue){
//   return accumulator + currentValue;
// }, 0);

// const average = sum / arr.length;

// console.log(average);

// average version 1
let sum = grades.reduce((total, currVal) => {
  return total + currVal;
});

let average = sum / grades.length;

console.log(average);

// average version 2
const avrg = grades.reduce((acc, num, index, array) => {
  acc += num;
  if (index === array.length - 1) {
    return acc / array.length;
  } else {
    return acc;
  }
});
