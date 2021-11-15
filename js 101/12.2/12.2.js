const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

//    1. Implement the following getCandy function:
// The function should return the candy element with the specified id.

function getCandy(candyStore, id) {
  let candies2 = candyStore.candies;
  let returnId = candies2.filter((candy) => {
    return candy.id.includes(id);
  });
  return returnId;
}

console.log(getCandy(candyStore, "5hd7y"));

// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified
// id.

function getprice(candyStore, id) {
  let candies2 = candyStore.candies;
  let returnId = candies2.filter((candy) => {
    return candy.price.includes(id);
  });
  return candies2.find((candy) => candy.id === id);
}

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything.

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    name: name,
    id: id,
    price: price,
  });
}

console.log(addCandy);

// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.

function buy(candyStore, id) {
  let candyStore = candies.filter((item) => {
    item.id.includes(id);
  });
  candy[0].amount--;
  candyStore.cashRegister += candy[0].price;
}


