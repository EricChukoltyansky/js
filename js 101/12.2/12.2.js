const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
   }

//    1. Implement the following getCandy function:
// The function should return the candy element with the specified id.

function getCandy(candyStore, id) {
    let candies2 =  candyStore.candies;
    let returnId = candies2.filter(candy => {
        return candy.id.includes(id)
    })
    return returnId;
}

console.log(getCandy(candyStore,"5hd7y"))