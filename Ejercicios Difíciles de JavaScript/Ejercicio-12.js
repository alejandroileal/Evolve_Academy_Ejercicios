// Conversión de Valores Mixtos a Tipo Number

// Desarrolla una función que tome un array de valores de distintos tipos (números, strings, booleanos, null, undefined, objetos) y utilice la función Number() para convertirlos a tipo number. La función debe retornar un objeto con dos arrays: uno con los valores convertidos correctamente y otro con los valores que no pudieron convertirse.

const convertValuesToNumbers = (values) => {
  const result = {
    converted: [],
    failed: [],
  };

  values.forEach((value) => {
    const convertedValue = Number(value);
    if (!isNaN(convertedValue) && value !== null && value !== undefined) {
      result.converted.push(convertedValue);
    } else {
      result.failed.push(value);
    }
  });

  return result;
};

const mixedValues = [
  42,
  "3.14",
  "100",
  true,
  false,
  null,
  undefined,
  "abc",
  {},
  [],
  "0",
  "10.5kg",
];
const result = convertValuesToNumbers(mixedValues);
console.log(result);
