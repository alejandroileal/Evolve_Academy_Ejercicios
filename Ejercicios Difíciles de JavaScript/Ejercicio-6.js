// Redondeo Obligatorio Hacia Abajo

// Escribe una función que tome un array de números y retorne un nuevo array donde cada número haya sido redondeado hacia abajo utilizando Math.floor(). Sin embargo, si alguno de los números del array original ya es un número entero, la función debe devolverlo sin modificarlo.

const roundDownNumbers = (numbers) =>
  numbers.map((num) => (Number.isInteger(num) ? num : Math.floor(num)));

const numbers = [1.9, -3.2, 5.0, 7.6, -2.8, 4];
const roundedNumbers = roundDownNumbers(numbers);
console.log(roundedNumbers);
