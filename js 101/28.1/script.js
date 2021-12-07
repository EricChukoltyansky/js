const jokebtn = document.querySelector(`.getJoke`);
const jokeHolder = document.querySelector(`.joke p`);
const titleHolder = document.querySelector(".title p");
const jokeButtonText = jokebtn.querySelector(".btn-text");

const baseUrl = "https://api.jokes.one/jod";

const getJoke = () => {
  jokeHolder.textContent =
    "Please wait for the joke, hope it's good enough to worth the wait";
  fetch(baseUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      titleHolder.textContent = data.contents.jokes[0].joke.title;
      jokeHolder.textContent = data.contents.jokes[0].joke.text;
    })

    .catch((err) => (jokeHolder.textContent = "Try again"));
};

const clickHandler = () => {
  getJoke();
};

jokebtn.addEventListener("click", clickHandler);
