import peliculas from "./peliculas.js";
console.log(peliculas);

const generos = [28, 53, 12];

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
    const peliContainer = document.createElement("div");
    const imgContainer = document.createElement("img");
    imgContainer.src = `https://image.tmdb.org/t/p/w500${imgPath}`;
    pelisContainer.appendChild(imgContainer);
    const titleContainer = document.createElement("h3");
    titleContainer.textContent = `${titulo}`;
    pelisContainer.appendChild(titleContainer);
    pelisContainer.appendChild(peliContainer);
  });
}
