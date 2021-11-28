

let password = document.querySelector(".password");
let inputs = document.querySelectorAll("input");

window.addEventListener("paste", (e) => {
let paste = (e.clipboardData || window.clipboardData).getData("text");
console.log(paste);
let pasteArray = Array.from(paste);
    // console.log(pasteArray)
  //   console.log(clipboardData);
  pasteArray.forEach((element, index) => {
    if (index < 6 && index > 0) {
      inputs[index].value = parseInt(element);
    }
  });
});

let valid = (char) => {
  let regex = /[0-9]/g;
  if (!char.value.match(regex)) {
    char.value = "";
  } else {
    let next = char.nextElementSibling;
    next.focus();
  }
};
