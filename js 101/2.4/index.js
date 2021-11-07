

let today = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function todayDate() {
    return 'Today is ' + days[today.getDay()] + " the " +today.getDate() + ' of ' + monthNames[today.getMonth()] + ' , ' + today.getFullYear()
}

console.log(todayDate())