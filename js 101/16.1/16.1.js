// function funcA() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// funcA();

//  undefined, console.log(a) prints out the var, but since it is hoisted under its console.log it won't print out.
//  2, funcA() prints out foo() which prints 2 in its turn.

// var fullName = "John Doe";
// var obj = {
//   fullName: "Colin Ihrig",
//   prop: {
//     fullName: "Aurelio De Rosa",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName();
// console.log(test);

// console.log(obj.prop.getFullName()) will print out Aurelio De Rosa
// console.log(test()); will print out Aurelio De Rosa since it will get inside the method getFullName => return obj.prop.fullname => "Aurelio De Rosa"

function funcB() {
    let a = b = 0;
    a++;
    return a;
   }
   funcB();
   console.log(typeof a);
   console.log(typeof b);

// console.log(typeof a); => number
// console.log(typeof b); => number

// function funcC() {
//     console.log("1");
//    }
//    funcC();
//    function funcC() {
//     console.log("2");
//    }
//    funcC();

// 2, funcC()=>console.log("1"), the last return of funcC() is console.log("2"), because of hoisting it determines the funcC() above it  
// 2, funcC()=>console.log("2")   
 


