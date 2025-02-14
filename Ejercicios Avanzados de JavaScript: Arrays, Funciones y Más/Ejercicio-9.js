// Filtrado de Libros por Autor y Año

// Dado un array de objetos (libros con autor y año):

const libros = [
  { titulo: "JavaScript Avanzado", autor: "Juan Pérez", año: 2019 },
  { titulo: "JavaScript Básico", autor: "Carlos López", año: 2008 },
];

// Filtra los libros publicados después de 2010.

console.log(libros.filter((libro) => libro.año > 2010));

// Encuentra el primer libro de un autor específico usando find.

console.log(libros.find((libro) => libro.autor === "Carlos López"));

// Ordena los libros por año de publicación.

console.log(libros.sort((a, b) => a.año - b.año));
