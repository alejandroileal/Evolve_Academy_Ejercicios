//  Redondeo Obligatorio Hacia Arriba

// Crea una función que reciba un array de números decimales positivos y negativos, y devuelva un nuevo array donde cada número haya sido redondeado hacia arriba utilizando Math.ceil(). Antes de retornar el resultado, la función debe validar que no haya valores NaN dentro del array original y, en caso de encontrarlos, eliminarlos antes de aplicar el redondeo.

const roundUpNumbers = (numbers) =>
  numbers.filter((num) => !isNaN(num)).map((num) => Math.ceil(num));

const numbers = [1.2, -3.8, 5.6, NaN, 7.1, -2.3, NaN, 0.4];
const roundedNumbers = roundUpNumbers(numbers);
console.log(roundedNumbers);
