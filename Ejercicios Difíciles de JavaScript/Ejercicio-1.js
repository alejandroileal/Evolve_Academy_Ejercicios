// Conversión de Números a Cadenas

// Crea una función que reciba un array de números y devuelva un nuevo array donde cada número se haya convertido a su representación en cadena de texto utilizando el método toString(). Además, la función debe garantizar que el resultado sea realmente de tipo string, validándolo antes de añadirlo al nuevo array. Finalmente, retorna un objeto que contenga el array original y el array convertido.

const transformNumbersToString = (numbersArray) => {
  const converted = numbersArray.map((num) => {
    const str = num.toString();
    return typeof str === "string" ? str : null;
  });

  return {
    original: numbersArray,
    converted,
  };
};

const numArray = [1, 2, 3, 45, 678, 90];
const result = transformNumbersToString(numArray);
console.log(result);
