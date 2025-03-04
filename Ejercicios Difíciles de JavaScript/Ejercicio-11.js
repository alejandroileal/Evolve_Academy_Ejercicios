// Conversión de Cadenas Numéricas a Decimales

// Dado un array de cadenas de texto que contienen números decimales (algunos con caracteres adicionales al final), escribe una función que los convierta en valores de tipo float utilizando parseFloat(). La función debe ignorar cualquier carácter no numérico después del número y retornar un array con los valores convertidos.

const convertStringsToFloats = (strings) => {
  return strings.map((str) => parseFloat(str)).filter((num) => !isNaN(num));
};

const stringNumbers = [
  "3.14",
  "42.56abc",
  "100.99$",
  "5.0kg",
  "7.89xyz",
  "NaN",
  "0.01%",
  "123.45m",
];
const convertedNumbers = convertStringsToFloats(stringNumbers);
console.log(convertedNumbers);
