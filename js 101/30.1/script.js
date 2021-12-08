const button = document.querySelector("button");
let userName = document.querySelector("section .user-name");
let image = document.querySelector("section .image-container");
let repoNumber = document.querySelector("section .repo-number");
const input = document.querySelector("input");

let getFetch = async () => {
  input.focus();
  const val = document.querySelector("input").value;
  console.log(val);
  userName.textContent = "Searching.. Please Hold you horses";
  repoNumber.textContent = "Chill mate, still looking";
  const res = await fetch(`https://api.github.com/users/${val}`, {
    headers: {
      Accept: "application/json",
    },
  });
  let data = await res.json();
  console.log(data);
  try {
    userName.textContent = data.login;
    image.style.backgroundImage = `url("${data.avatar_url}")`;
    repoNumber.textContent = data.public_repos;
  } catch {
    userName.textContent = `Error number: ${data.status}, user not found`;
    image.style.backgroundImage = "No such user image";
    repoNumber.textContent = "No such user repos";
  }
};

button.addEventListener("click", getFetch);
