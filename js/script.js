import peliculas from "./peliculas.js";
console.log(peliculas);

const generos = [28, 53, 12];

// const generoSet = new Set();

// peliculas.forEach((pelicula) => {
//   pelicula.genre_ids.forEach((id) => generoSet.add(id));
// });
// const generos = Array.from(generoSet);
// console.log(generos);

generos.forEach((genero) => {
  const pelisFiltradas = peliculas.filter((pelicula) =>
    pelicula.genre_ids.includes(genero)
  );
  const pelisContainer = document.getElementById(`genero-${genero}`);
  poblar(pelisFiltradas, pelisContainer);
});
function poblar(pelisFiltradas, pelisContainer) {
  pelisFiltradas.forEach((pelicula) => {
    const titulo = pelicula.original_title;
    const imgPath = pelicula.backdrop_path;
    const peliCard = document.createElement("div");
    const imgContainer = document.createElement("img");
    imgContainer.src = `https://image.tmdb.org/t/p/w500${imgPath}`;
    peliCard.appendChild(imgContainer);
    const titleContainer = document.createElement("h3");
    titleContainer.textContent = `${titulo}`;
    peliCard.appendChild(titleContainer);
    pelisContainer.appendChild(peliCard);
  });
}
