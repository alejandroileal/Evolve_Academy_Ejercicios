// Filtrado de Elementos No Numéricos en un Array

// Dado un array con elementos de distintos tipos de datos, crea una función que devuelva un nuevo array que contenga solo aquellos valores que sean realmente numéricos. Para ello, usa la función isNaN() para detectar y excluir los valores que no sean números válidos.

const filterNumericValues = (arr) =>
  arr.filter((value) => typeof value === "number" && !isNaN(value));

const mixedArray = [
  10,
  "hola",
  3.14,
  NaN,
  true,
  42,
  null,
  undefined,
  "25",
  0,
  -7,
];
const numericArray = filterNumericValues(mixedArray);
console.log(numericArray);
