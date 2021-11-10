let removeDuplicates = (arr) => {
  let newArr = [];
  for (let i of arr) {
    for (let j of arr) {
      if (arr[i] === arr[j]) {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr
};
