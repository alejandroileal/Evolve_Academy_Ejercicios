//  Extraer el Valor Primitivo de Objetos Number

// Crea una función que tome un array de valores, donde algunos de ellos sean instancias del objeto Number creadas con new Number(). La función debe recorrer el array y reemplazar cualquier instancia de Number con su valor primitivo usando valueOf(). Devuelve un nuevo array con los valores corregidos.

const extractPrimitiveNumbers = (values) =>
  values.map((value) => (value instanceof Number ? value.valueOf() : value));

const mixedValues = [
  42,
  new Number(10),
  "3.14",
  new Number(100),
  5.5,
  true,
  new Number(-7),
];
const result = extractPrimitiveNumbers(mixedValues);
console.log(result);
