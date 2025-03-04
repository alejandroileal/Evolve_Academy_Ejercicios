// Redondeo de Números con Precisión Fija

// Escribe una función que tome un array de números decimales y retorne un nuevo array donde cada número haya sido redondeado a exactamente tres decimales utilizando el método toFixed(). Sin embargo, antes de retornar el resultado, la función debe verificar que todos los elementos del array original sean de tipo number y, en caso de encontrar un valor no numérico, debe lanzar un error con un mensaje adecuado.

const roundNumbersToThreeDecimals = (numbers) => {
  if (numbers.some((num) => typeof num !== "number")) {
    throw new Error("Los elementos del array deben de ser números");
  }

  const rounded = numbers.map((num) => parseFloat(num.toFixed(3)));

  return rounded;
};

const numbers = [1.23456, 2.15678, 3.97643, 45.6789, 90.12345, "123"];
const result = roundNumbersToThreeDecimals(numbers);
console.log(result);
