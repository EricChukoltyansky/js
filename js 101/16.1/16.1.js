function funcA() {
    
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
   }
   funcA();

//  undefined, console.log(a) prints out the var, but since it is hoisted under its console.log it won't print out.
//  2, funcA() prints out foo() which prints 2 in its turn.