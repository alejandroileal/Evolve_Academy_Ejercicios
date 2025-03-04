// Clasificación de Números con Condicionales Encadenados

// Dado un número, escribe una función que devuelva:

// "Positivo" si es mayor que 0.

// "Negativo" si es menor que 0.

// "Cero" si es igual a 0.
// Usa operadores de comparación (>, <, ===) y operadores ternarios (? :).

const clasificarNúmero = (numero) =>
  numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Cero";

console.log(clasificarNúmero(-1));
