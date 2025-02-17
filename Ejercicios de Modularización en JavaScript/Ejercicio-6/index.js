import {
  peliculas,
  agregarPelicula,
  buscarPeliculasPorGenero,
  obtenerTitulos,
  ordenarPorDuración,
} from "./streaming.js";

agregarPelicula("Inception", 148, "Ciencia Ficción");
agregarPelicula("Titanic", 195, "Romance");
agregarPelicula("Interstellar", 169, "Ciencia Ficción");
agregarPelicula("El Padrino", 175, "Drama");

console.log(peliculas);

console.log(buscarPeliculasPorGenero("Drama"));

console.log(obtenerTitulos());

console.log(ordenarPorDuración());
