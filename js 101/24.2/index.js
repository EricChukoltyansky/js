function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let charmander = new Pokemon("charmander", "fire", ["fireBreath", "fly"]);
let squirtle = new Pokemon("squirtle", "water", ["squirt", "whirl"]);
let abra = new Pokemon("abra", "psychic", ["telekenesis", "psychic attack"]);

Pokemon.prototype.callPokemon = function () {
  return `I choose you ${this.name}`;
};

let poko = new Pokemon('charizard', 'fire', 'fly');

console.log(charmander.callPokemon())
