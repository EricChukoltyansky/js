const passwordFuncIf = function (password) {
    if (password.length > 7) {
        return "Strong"
    }
    if (password.length < 7) {
        return "Weak"
    }
}

const passwordFuncTernary = function (password) {
    return password.length > 7 ? "Strong" : "Weak";
}

const passwordFuncLogical = function (password) {
    if ( password.length > 7 && typeof(password) === Number) {
        return "Strong"
    } else {
        return "Weak"
    }
}

const advPass = function(password) {
 return (password.length > 7 && password.includes([/A-Z/])) > 7 ? "Very Strong" : password.length > 7 ? "Strong" : "Weak";
 

}

console.log(advPass("kjfkjf"))
console.log(advPass("kjfkjfffD"))
