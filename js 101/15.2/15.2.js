function findSmallest(a, b, c){
    if (a > b > c){
    return c;
    } else if (a > c > b) {
    return a;
   } else {
    return b;
    }
}

console.log(findSmallest(52,66,2));

// 1.The name of the function was written wrong, no console.log to present the asnwer