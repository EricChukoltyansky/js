var b = 1;
function someFunction(number) {
 function otherFunction(input) {
 return b;
 }
 b = 5;
 return otherFunction;
}
console.log(firstResult = someFunction(-20));
console.log(result = firstResult(8))

// Will always return 5 and otherFunction since 

