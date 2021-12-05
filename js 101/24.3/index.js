const data = [1, 2, 3, 4, 5];

Array.prototype.myCustomFilter = function (fn) {
  const filtered = []; // it will receive all values that match to condition passed in fn callback.

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      filtered.push(this[i]);
    }
  }

  return filtered;
};

const filteredData = data.myCustomFilter(function (el) {
    if (el > 2) return el;
  });