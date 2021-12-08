"use strict";

let tbody = document.querySelector("tbody");

const baseUrl = "https://swapi.dev/api/people/";
const baseUrl2 = "https://swapi.dev/api/planets/1/";

let getStarWars = async () => {
  const res = await fetch(baseUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  let data = await res.json();
  console.log(data);

  const charactersArr = [];
  for (let i = 0; i < data.results.length; i++) {
    const character = data.results[i];
    let { name, height, hair_color, homeworld } = character;
    const homeWorldData = await (await fetch(homeworld)).json();
    homeworld = homeWorldData.name;
    const population = homeWorldData.population;
    charactersArr.push({
      name,
      height,
      hair_color,
      homeworld,
      population,
    });
    const tableHtml = `
    <tr>
    <td>${name}</td>
    <td>${height}</td>
    <td>${hair_color}</td>
    <td>${homeworld}</td>
    <td>${population}</td>
</tr>
`;
    tbody.innerHTML += tableHtml;
  }

  console.log(charactersArr);
};

getStarWars();
