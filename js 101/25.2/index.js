let pokemon = {
  firstname: "Pika",
  printName: function () {
    console.log(this.firstname);
  },
  getPokeName: function () {
    setTimeout(this.printName.bind(pokemon), 1000);
  },
};

let callName = function () {
  console.log(this.printName());
};

// let callNameDelay = function () {
//   console.log(this.getPokeName());
// };

console.log(callName.call(pokemon));
pokemon.getPokeName.call(pokemon);
