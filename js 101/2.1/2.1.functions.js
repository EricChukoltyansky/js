function describeCountry(country, population, captialCity) {
  return country + ' has ' + population + ' million people and its capital city is ' + captialCity;  
}


let israel = 'israel'
let jerusalem = "Jerusalem"

let first = describeCountry(israel, 6, jerusalem);
console.log(first);

let brazil = "Brazil"
let brazilia = "Brazilia"

let second = describeCountry(brazil, 200, brazilia);
console.log(second)

let usa = "USA"
let washington = "Washington"

let third = describeCountry(usa, 200, washington );
console.log(third)