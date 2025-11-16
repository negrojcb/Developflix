import peliculas from "./peliculas.js";
console.log(peliculas);

const accionContainer = document.getElementById("genero-28");
const thrillerContainer = document.getElementById("genero-53");
const aventuraContainer = document.getElementById("genero-12");

const pelisAccion = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(28)
);
function poblar(peliculas) {
  for (let i = 0; i < peliculas.length; i++) {
    const titulo = pelisAccion[i].original_title;
    const imgPath = pelisAccion[i].backdrop_path;
    const peliContainer = document.createElement("div");
    const imgContainer = document.createElement("img");
    imgContainer.src = `https://image.tmdb.org/t/p/w500${imgPath}`;
    peliContainer.appendChild(imgContainer);
    const titleContainer = document.createElement("h3");
    titleContainer.textContent = `${titulo}`;
    peliContainer.appendChild(titleContainer);
    accionContainer.appendChild(peliContainer);
  }
}
poblar(pelisAccion);
