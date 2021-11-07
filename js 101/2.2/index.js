function tellFortune(jobTitle, location, partnerName ,numberOfChilren) {
    return 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' + partnerName + " with " + numberOfChilren + " children "
}

let programmer = 'programmer';
let telAviv = "Tel Aviv";
let sharon = "Sharon";
let two = "2"

let answer =  tellFortune(programmer, telAviv, sharon, two );
console.log(answer)