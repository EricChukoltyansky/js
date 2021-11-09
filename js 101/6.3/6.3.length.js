let wordLength = function(arr) {
    length=0;
    for (let i in arr) {
     length++;
    }
    return length;
}

console.log(wordLength("boo"));
console.log(wordLength("dooooo"));
console.log(wordLength("hoo"));
console.log(wordLength("ro"));