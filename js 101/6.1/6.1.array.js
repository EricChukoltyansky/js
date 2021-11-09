const arr = [1,7,3,0,-5,7,3,9];

let print = function(arr) {
    for(let i=0; i<arr.length; i++) {
      console.log(arr[i]);
    }
}

let length = 0;

let arrayLength = function(arr) {
   for(let i of arr) {
     length++
   }
   return length;
}



let arraySum = function(arr) {
    let sum = 0;
    for(let i in arr) {
        sum +=arr[i] ;
    }
    return sum;
}


let arrayMulti = function(arr) {
    let sum = 0;
    for(let i in arr) {
        sum *= arr[i];
    }
    return sum;
}

console.log(print(arr));
console.log(arrayLength(arr));
console.log(arraySum(arr));
console.log(arrayMulti(arr));
