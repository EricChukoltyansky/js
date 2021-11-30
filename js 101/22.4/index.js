let start1 = document.querySelectorAll(".active")[0];
let start2 = document.querySelectorAll(".active")[1];
console.log(start1);
console.log(start2);

document.addEventListener("keyup", (e) => {
  if (e.key === "d") {
    let nextTD = start1.nextElementSibling;
    nextTD.classList.add("active");
    start1 = nextTD;
    let previousTD = start1.previousElementSibling;
    previousTD.classList.remove("active");
    if (start1.classList.contains("finish")) {
      document.querySelector("h2").innerText = "Player 1 won";
      let btn = document.querySelector("button");
      btn.style.display = "block";
      btn.addEventListener("click", () => {
        location.reload();
      });
    }
  }
  if (e.key === "l") {
    console.log(e.key);
    let nextTD = start2.nextElementSibling;
    nextTD.classList.add("active");
    start2 = nextTD;
    let previousTD = start2.previousElementSibling;
    previousTD.classList.remove("active");
    if (start2.classList.contains("finish")) {
      document.querySelector("h2").innerText = "Player 2 won";
      document.querySelector("button").style.display = "block";
      btn.style.display = "block";
      btn.addEventListener("click", () => {
        location.reload();
      });
    }
  }
});
