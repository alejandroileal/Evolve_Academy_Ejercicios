// Generación de Números Aleatorios en Rango Definido

// Implementa una función que reciba tres parámetros: la cantidad de números aleatorios a generar (n), un valor mínimo (min) y un valor máximo (max). La función debe devolver un array con n números aleatorios enteros dentro del rango definido, asegurando que min y max sean respetados. Utiliza Math.random() y Math.floor() para lograrlo.

const generateRandomNumbers = (n, min, max) =>
  new Array(n)
    .fill(0)
    .map(() => Math.floor(Math.random() * (max - min + 1)) + min);

const randomNumbers = generateRandomNumbers(5, 10, 50);
console.log(randomNumbers);
