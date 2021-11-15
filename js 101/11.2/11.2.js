let array = [20, 21, 22, 23, 24, 25, 26];

// 1
// let double = array.map((num) => {
//  return num*2
// })

// 2
//  let isEven = array.map((num) => {
//     return {
//         value:num,
//         isEven: num %2 === 0
//     }
// })

3;
// function showFirstAndLast(arr) {
//   let result = [];
//   arr.forEach((el, index) => {
//     if (index === 0 || index === arr.length - 1) {
//       result.push(el);
//     }
//   });
//   return result;
// }
// console.log(showFirstAndLast(array));

// 4
// someStr = "iamahab";

// let vowelCount = (str) => {
//   let vowelsCount = 0;
//   let obj = {};
//   str.split("").forEach((x) => {
//     if ((x == "a") | (x == "e") | (x == "i") | (x == "o") | (x == "u")) {
//       if (obj[x]) {
//         obj[x]++;
//       } else {
//         obj[x] = 1;
//       }
//     }
//   });
//   return obj;
// };

// console.log(vowelCount(someStr));

5
let capitFunc = (str) => {
 str = str.split(" ");
 let capit = str.map((el) => {
   return el.toUpperCase().slice(0,1)+ el.slice(0,-1);
 })
 capit.join(" ")
 console.log(capit)
}

console.log(capitFunc("iaidkfkf"))

// 6
let shiftLetters = (str) => {
  let result = str
    .split("")
    .map(function (val) {
      let letterKey = val.charCodeAt() - 13;
      if (letterKey < 65) {
        letterKey = 90 - (65 - letterKey - 1);
      }
      //   console.log(letterKey);
      return String.fromCharCode(letterKey);
    })
    .join("");
  return result;
};

console.log(shiftLetters("bcdegh"));

// 7
let swapCase = (str) => {
 let str1 = str.split(" ");
 let result= [];
  str1
    .forEach(function (el, index) {
      if (index % 2 === 0) {
        
        result.push(capitFunc(el));
      }
    })
    return result.join(" ");
};

console.log(swapCase("kjlkj lkjl jdjd"));
