// Estadísticas de Redes Sociales

// Dado un array de publicaciones (likes, comentarios):

const publicaciones = [
  { likes: 50, comentarios: 10 },
  { likes: 200, comentarios: 30 },
  { likes: 120, comentarios: 20 },
];

// Calcula el total de likes usando reduce. (Lo he hecho investigando, pues no hemos visto este método)

const totalDeLikes = publicaciones.reduce((acumulador, publicación) => {
  return (acumulador += publicación.likes);
}, 0);

console.log(totalDeLikes);

// Filtra publicaciones con más de 100 likes.

console.log(publicaciones.filter((publicación) => publicación.likes > 100));

// Ordena publicaciones de mayor a menor popularidad.

console.log(publicaciones.sort((a, b) => b.likes - a.likes));
