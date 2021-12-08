const imageFront = document.querySelector(".image-container-front");
const imageBack = document.querySelector(".image-container-back");
const movieTitle = document.querySelector(".flip-card-front h2");
const director = document.querySelector(".flip-card-front .movie-director");
const actors = document.querySelector(".flip-card-front .movie-actors");
const genre = document.querySelector(".flip-card-front .movie-genre");
const rated = document.querySelector(".flip-card-front .movie-rated");
const plot = document.querySelector(".flip-card-back .movie-plot");
const ratingImdb = document.querySelector(".flip-card-back .rating-imdb");
const ratingRotten = document.querySelector(".flip-card-back .rating-rotten");
const ratingMeta = document.querySelector(".flip-card-back .rating-meta");

const baseURl = "http://www.omdbapi.com/?i=tt3896198&apikey=acf6a8ae";

let getMovie = async () => {
  const res = await fetch(baseURl, {
    headers: {
      Accept: "application/json",
    },
  });
  let data = await res.json();
  console.log(data);
  try {
    // image.style.backgroundImage = `url("${data.avatar_url}")`;
    // imageFront.style.backgroundImage = `url("${data.Poster}")`;
    // imageBack.style.backgroundImage = `url("${data.Poster}")`;
    movieTitle.textContent = data.Title;
    director.textContent = data.Director;
    actors.textContent = data.Actors;
    genre.textContent = data.Genre;
    rated.textContent = data.Rated;
    plot.textContent = data.Plot;
    ratingImdb.textContent = `${
      data.Ratings[0].Source + data.Ratings[0].Value
    }`;
    ratingRotten.textContent = `${
      data.Ratings[1].Source + data.Ratings[1].Value
    }`;
    ratingMeta.textContent = `${
      data.Ratings[2].Source + data.Ratings[2].Value
    }`;
  } catch {}
};

window.addEventListener("load", getMovie);
