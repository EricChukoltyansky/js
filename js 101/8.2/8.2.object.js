myCountry = {
  country: "Finland",
  capital: "Helsniki",
  language: "Finnish",
  population: "6 million",
  neighbours: ["Sweden", "Russia", "Norway"],
  describe() {
    this.sentence = `${this.country} has 6 ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland() {
    this.neighbours.length === 0
      ? (this.isIsland = true)
      : (this.isIsland = false);
    return this.isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
