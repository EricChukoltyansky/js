let array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

let newArray = array.toString().replace(/[, ]+/g, "").trim().split("");

function getFrequency(newArray) {
  let frequency = {};
  for (let i = 0; i < newArray.length; i++) {
    if (frequency[newArray[i]]) {
      frequency[newArray[i]]++;
    } else {
      frequency[newArray[i]] = 1;
    }
  }

  return frequency;
}

console.log(getFrequency(newArray));
