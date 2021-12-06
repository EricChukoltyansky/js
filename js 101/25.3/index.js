const wonderWoman = {
  name: "Diana Prince",
};
const batman = {
  name: "Bruce Wayne",
};
const superHeroes = [wonderWoman, batman];
// console.log(wonderWoman)
// console.log(batman)

function printName() {
  console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
  return printFunc(heroes)

}

printHeroes(superHeroes[0].name, printName.bind(wonderWoman))
printHeroes(superHeroes[1].name, printName.bind(batman))
