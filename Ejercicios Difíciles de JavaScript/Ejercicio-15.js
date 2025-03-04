// Transformación de Strings Numéricos en un Objeto Detallado

// Dado un array de cadenas que representan números en formato decimal, crea una función que convierta cada número a un objeto con las siguientes propiedades:

// original: El número en su forma original como cadena.

// numero: El número convertido a tipo Number.

// exponencial: El número representado en notación exponencial con dos decimales.

// redondeado: El número redondeado al entero más cercano.

// La función debe devolver un array con estos objetos.

const transformStringNumbers = (stringNumbers) =>
  stringNumbers.map((str) => {
    const numero = Number(str);

    return {
      original: str,
      numero,
      exponencial: numero.toExponential(2),
      redondeado: Math.round(numero),
    };
  });

const stringNumbers = ["3.1416", "42.56", "100.99", "0.00045", "-15.7"];
const result = transformStringNumbers(stringNumbers);
console.log(result);
