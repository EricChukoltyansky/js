const checkbox = document.querySelector("#checkbox");
const image = document.querySelector("img");
image.src =
  "https://images.pexels.com/photos/10136037/pexels-photo-10136037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

checkbox.addEventListener("change", function () {
  if (this.checked) {
    image.classList.add("display");
    image.classList.remove("display-none");
  } else {
    image.classList.add("display-none");
    image.classList.remove("display");
  }
});
