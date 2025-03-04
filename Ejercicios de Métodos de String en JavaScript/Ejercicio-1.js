// Obtener iniciales de una lista de nombres

// Dado un array con varios nombres completos, crear una función que devuelva un nuevo array con las iniciales de cada nombre en mayúsculas.

const nombres = [
  "Alejandro Ramírez",
  "María López",
  "Carlos Gómez",
  "Sofía Hernández",
  "Javier Torres",
];

const obtenerIniciales = (nombres) =>
  nombres.map((nombre) =>
    nombre
      .split(" ")
      .map((palabra) => palabra[0].toUpperCase())
      .join("")
  );

console.log(obtenerIniciales(nombres));
