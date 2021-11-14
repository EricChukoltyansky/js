let isString = (str, f) => {
  if (typeof str === "string") {
    f(str);
  }
};

function f(str) {
  console.log(str);
}

isString("hello", f);

let firstWordUpperCase = (str,f, f2) => {
  str = str.charAt(0).toUpperCase() + str.slice(1);

  f(str);
  f2(str)

};

let dashes = (str) => {
  console.log(str = str.replace(/ /g, "-"));
  
};

let asterisk = (str) => {
console.log(str = str.replace(/ /g, "*"))
}

firstWordUpperCase("i am Ahab the mighty", asterisk, dashes);
