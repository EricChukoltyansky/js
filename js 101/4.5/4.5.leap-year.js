function leapYear(year) {
    if (year % 4 === 0) {
       if (year % 100 === 0){
          if (year % 400 == 0){
             return ("It is indeed a leap year");
          } else {
             return ("This is not a leap year.");
          }
       } else {
          return ("It is indeed a leap year");
       }
    }
}

console.log(leapYear(2100))
console.log(leapYear(2400))
console.log(leapYear(2012))