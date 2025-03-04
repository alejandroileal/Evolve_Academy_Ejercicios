// Conversión de Grandes Números a Notación Exponencial

// Implementa una función que reciba un array de números de distintos órdenes de magnitud y devuelva un nuevo array donde cada número haya sido convertido a su notación exponencial con cuatro decimales utilizando toExponential(). Adicionalmente, la función debe detectar valores negativos y, en esos casos, incluir una advertencia en la salida indicando que el número convertido era originalmente negativo.

const convertToExponential = (numbers) =>
  numbers.map((num) => ({
    original: num,
    exponential: num.toExponential(4),
    warning: num < 0 ? "Originalmente este número era negativo" : null,
  }));

const numbers = [123456, 0.00056789, -987654321, 42, -0.0000345];
const result = convertToExponential(numbers);
console.log(result);
