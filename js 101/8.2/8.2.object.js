myCountry = {
  country: "Finland",
  capital: "Helsniki",
  language: "Finnish",
  population: "6 million",
  neigbours: ["Sweden", "Russia", "Norway"],
  describe() {
    console.log(
      `${this.country} has 6 ${this.population} people, their mother tongue is ${this.language}, they have ${this.neigbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checksland() {
    this.neigbours.length === 0
      ? (this.isIsland = true)
      : (this.isIsland = false);
  },
};

console.log(myCountry.describe);
console.log(myCountry.checkIsland);
console.log(myCountry);
