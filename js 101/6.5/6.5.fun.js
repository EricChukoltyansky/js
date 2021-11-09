// 1
let array = [];
let filledArray = new Array(100).fill({'hello':'goodbye'});
console.log(filledArray)

// 2
let filledArr2 = Array.from(Array(100).keys())
console.log(filledArr2)

// 3
var obj = {"1":5,"2":7,"3":4,"4":6,"5":8,"6":9,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};
var result = Object.values(obj);
console.log(result);

// 4
console.log(
    Object.assign({}, ['a', 'b', 'c'])
  );

// 5 
Array.isArray(array);

// 6
let arr= [];
const newArr = arr.slice();

// 7
let arr= []
const newArr2 = arr;