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

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName();
console.log(test);

// console.log(obj.prop.getFullName()) will print out Aurelio De Rosa
// console.log(test()); will print out Aurelio De Rosa since it will get inside the method getFullName => return obj.prop.fullname => "Aurelio De Rosa"


