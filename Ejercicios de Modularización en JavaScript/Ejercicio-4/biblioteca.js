// Biblioteca de Libros Digitales 📖

// 📌 Objetivo: Administra una colección de libros con operaciones avanzadas.

const libros = [
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ciencia Ficción",
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo Mágico",
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    genero: "Clásico",
  },
  {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    genero: "Romance Clásico",
  },
];

// ✅ Agregar libros con título, autor y género. (Quité los acentos en el ejercicio)

const agregarLibro = (titulo, autor, genero) =>
  libros.push({ titulo, autor, genero });

// ✅ Buscar libros por autor (find). (Sólo encuentra con coincidencias exactas)

const buscarLibrosPorAutor = (autor) =>
  libros.find((libro) => libro.autor === autor);

// ✅ Obtener la lista de títulos (map).

const obtenerListaDeTítulos = () => libros.map((libro) => libro.titulo);

// ✅ Saber si hay libros de un género específico (includes).

const buscarPorGénero = (género) =>
  libros.filter((libro) =>
    libro.genero.toLowerCase().includes(género.toLowerCase())
  );
// ✅ Ordenar libros alfabéticamente (sort).

const ordenarAlfabeticamente = () => libros.sort();

// ✅ Filtrar libros de un género (filter).

const filtrarPorGénero = (género) =>
  libros.filter((libro) => libro.genero.toLowerCase() === género.toLowerCase());

module.exports = {
  libros,
  agregarLibro,
  buscarLibrosPorAutor,
  obtenerListaDeTítulos,
  buscarPorGénero,
  ordenarAlfabeticamente,
  filtrarPorGénero,
};
