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
};

console.log(hashTag(20));
