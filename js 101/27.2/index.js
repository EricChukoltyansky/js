function makeCaps(letter) {
  return new Promise((resolve, reject) => {
    if (letter !== "string") {
      resolve(letter.toUpperCase());
    } else {
      reject("letter is a string");
    }
  });
}

function sortWords(letter) {
  return new Promise((resolve, reject) => {
    if (letter !== "string") {
      resolve(letter.sort((a, b) => a - b));
    } else {
      reject("letter is a string");
    }
  });
}

makeCaps("string")
  .then((String) => {
    sortWords("string")
      .then(() => {
        console.log("It worked");
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// const arrOfWords = ["hoo", "boo"];
// const arrOfWords2 = ["hoo", "boo", 5];

// const makeAllCaps = (arrBeforeCapitalize) => {
//   return new Promise(function (resolve, reject) {
//     resolve(
//       arrBeforeCapitalize.map((word) => {
//         if (typeof word !== "string") return reject(word);
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       })
//     );
//   });
// };

// const sortWords = (arrBeforeSorted) => {
//   return new Promise(function (resolve, reject) {
//     return resolve(arrBeforeSorted.sort());
//   });
// };

// // success
// makeAllCaps(arrOfWords)
//   .then((arrCapitalized) => {
//     sortWords(arrCapitalized).then((arrCapitalizedSorted) => {
//       console.log(arrCapitalizedSorted);
//     });
//   })
//   .catch((err) => {
//     console.log(`the word ${err} includes not only letters`);
//   });

// // failure
// makeAllCaps(arrOfWords2)
//   .then((arrCapitalized) => {
//     sortWords(arrCapitalized).then((arrCapitalizedSorted) => {
//       console.log(arrCapitalizedSorted);
//     });
//   })
//   .catch((err) => {
//     console.log(`${err} isn't a word`);
//   });
