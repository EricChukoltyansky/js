let grades = function(n) {
    if(n >= 0 && n<=64) {
        return "F"
    }
    else if(n >= 65 && n <=69) {
        return "D"
    }
    else if(n >= 70 && n <=79) {
        return "C"
    }
    else if(n >= 80 && n <=89) {
        return "B"
    }
    
    else if(n >= 90 && n <=100) {
        return "A"
    }
}

console.log(grades(55));
console.log(grades(65));
console.log(grades(75));
console.log(grades(85));