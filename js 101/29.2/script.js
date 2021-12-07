const jokebtn = document.querySelector(`.getJoke`);
const jokeHolder = document.querySelector(`.joke p`);
const titleHolder = document.querySelector(".title p");
const jokeButtonText = jokebtn.querySelector(".btn-text");

const baseUrl = "https://api.jokes.one/jod";

async function getJoke() {
  jokeHolder.textContent =
    "Please wait for the joke, hope it's good enough to worth the wait";

  const res = await fetch(baseUrl, {
    headers: {
      Accept: "application/json",
    },
  });
  let data = await res.json();
  console.log(data);
  try {
    titleHolder.textContent = data.contents.jokes[0].joke.title;
    jokeHolder.textContent = data.contents.jokes[0].joke.text;
  } catch {
    jokeHolder.textContent = "Try again";
  }
}

const clickHandler = () => {
  getJoke();
};

jokebtn.addEventListener("click", clickHandler);
