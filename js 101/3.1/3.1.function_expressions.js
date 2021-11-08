// From function declarations to function expressions
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }

const welcome = function() {
    let welcome = 'Welcome to appleseeds Bootcamp!';
    return welcome;
}

// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }

const power = function(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

// function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
// }

const add = function(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}


// From function expressions to function declarations
// const hello = () => "Hello!";

function hello() {
    return 'Hello';
}

// const squareRoot = a => Math.sqrt(a);

function squareroote(a) {
    Math.sqrt(a)
}

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers(a,b) {
    Math.random() * (a-b) + b;
}