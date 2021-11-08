let avg = function(a,b,c) {
    return ((a+b+c)/3)
}

let firstTeam = avg(89,120,103);
let secondTeam = avg(116,94,123);
let thirdTeam = avg(97,134,105);


console.log(firstTeam);
console.log(secondTeam);
console.log(thirdTeam);

if (firstTeam > secondTeam && firstTeam > thirdTeam) {
    console.log("First Team Is Better")
}
else if(firstTeam < secondTeam && secondTeam > thirdTeam) {
    console.log("Second Team Is Better")
}
else if(firstTeam == secondTeam && secondTeam == thirdTeam) {
    console.log("Draw!")
}
else if(thirdTeam > secondTeam && thirdTeam > firstTeam) {
    console.log("Third Team FTW")
}


