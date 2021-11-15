const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1
//    let returnName = () => {
//        data.join("")
//        data.map(el => {
//            return console.log(el.name)
//        })
//    }

//    console.log(returnName());



// 2
let before1990 = (data) => {
  result = [];
  data.forEach((el) => {
    if (parseInt(el.birthday.substr(-4)) < 1990) {
      result.push(el);
    }
  });
  return result;
};

console.log(before1990(data));

// let vowelCount = (str) => {
//   let vowelsCount = 0;
//   let obj = {};
//   str.split("").forEach((x) => {
//     if ((x == "a") | (x == "e") | (x == "i") | (x == "o") | (x == "u")) {
//       if (obj[x]) {
//         obj[x]++;
//       } else {
//         obj[x] = 1;
//       }
//     }
//   });
//   return obj;
// };



// 3
let foodReturn = (arr) => {
    let result = {};
    arr.forEach(el => {
        let foods1 = el.favoriteFoods.meats;
        let foods2 = el.favoriteFoods.fish;
        let foods = foods1.concat(foods2);
        foods.forEach(food => {
            if(result[food]) {
                result[food]++
            } else {
                result[food] = 1
            }
        })
    })
    return result
}

console.log(foodReturn(data))

