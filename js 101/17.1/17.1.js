// var b = 1;
// function someFunction(number) {
//  function otherFunction(input) {
//  return b;
//  }
//  b = 5;
//  return otherFunction;
// }
// console.log(firstResult = someFunction(-20));
// console.log(result = firstResult(8))

// Will always return 5 and otherFunction since number and input don't play a part in the function

// var a = 1;
// function b2() {
//  a = 10;
//  return;
//  function a() { }
// }
// b2();
// console.log(a);

// Will always print out just 1, because var a = 1, and b2() has no specific return

let i;
for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100);
}

// Prints out 3, 3, 3 because let i is globally defined, we can make print 0,1,2 if we define it inside the loop function