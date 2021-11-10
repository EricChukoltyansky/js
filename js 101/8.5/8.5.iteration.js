let obj = {
  for: 1,
  let: 2,
  return: 3,
};


function swap(obj){
    var obj2 = {};
    for(let i in obj){
      obj2[obj[i]] = i;
    }
    return obj2;
  }
console.log(swap(obj));
