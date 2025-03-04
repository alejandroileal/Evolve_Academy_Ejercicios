// Modificación de un Array según un Criterio

// Dado un array de números, escribe una función que:

// Sustituya todos los números negativos por 0.

// Devuelva el array modificado.

const numeros = [1, -4, -7, 2, -9, 7, 4];

const sustituirNegativosPorCero = (numeros) =>
  numeros.map((numero) => (numero < 0 ? 0 : numero));

console.log(sustituirNegativosPorCero(numeros));
