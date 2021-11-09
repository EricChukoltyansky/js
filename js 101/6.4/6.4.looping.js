let populations = [250000, 780000, 30000000, 45000000];

const populationPercentage = function(populations) {
    percentages = [];
    let arr;
    for (let i in populations) {
      percentages.push(populations[i])
    }
     return percentages
}

console.log(populationPercentage(populations))



