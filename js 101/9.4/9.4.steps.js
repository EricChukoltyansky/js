let hashTag = (N) => {
  for (let i = 0; i < N; i++) {
    let str = "";
    let j = 0;
    for (; j <= i; j++) {
      str += "#";
    }
    for (let j = N; j >= 0; j--) {
      str += " ";
    }
    console.log(str);
  }
  return;
};

console.log(hashTag(5));

function steps(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
      result[i] = ''
      for (let j = n; j > i; j--) {
          result[i] += ('#');
      }
      for (let t = n - result[i].length; t > 0; t--) {
          result[i] += ' ';
      }

  }
  result.pop()
  return result.reverse().join('\n')
}

console.log(steps(5));
