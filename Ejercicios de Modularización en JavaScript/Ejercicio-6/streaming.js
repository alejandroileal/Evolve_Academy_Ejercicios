// Ejercicios con ES Modules (import/export)

// 6️⃣ Plataforma de Streaming de Películas 🎬

// 📌 Objetivo: Maneja una lista de películas disponibles para streaming.

export const peliculas = [];

// ✅ Agregar películas con título, duración y género.

export const agregarPelicula = (titulo, duracion, genero) =>
  peliculas.push({ titulo, duracion, genero });

// ✅ Buscar películas de un género (filter).

export const buscarPeliculasPorGenero = (genero) =>
  peliculas.filter((pelicula) => pelicula.genero === genero);

// ✅ Obtener los títulos en un solo string (join).

export const obtenerTitulos = () =>
  peliculas.map((pelicula) => pelicula.titulo).join(", ");

// ✅ Ordenar películas por duración (sort).

export const ordenarPorDuración = () =>
  peliculas.sort((a, b) => b.duracion - a.duracion);
