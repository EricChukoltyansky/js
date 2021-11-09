// 1
let array = [];
let filledArr = new Array[100].fill('same')
console.log(filledArr)

// 2
let filledArr2 = Array.from(Array(10).keys())
console.log(filledArr2)

// 3
var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};
var result = Object.values;
console.log(result);

// 4
console.log(
    Object.assign({}, ['a', 'b', 'c'])
  );

// 5 
Array.isArray(array);

// 6
const newArr = arr.slice();

// 7
const newArr = [...arr];