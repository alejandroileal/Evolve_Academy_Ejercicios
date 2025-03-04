// Manipulación de Bits para Doblar o Reducir Valores

// Dado un número, escribe una función que:

// Lo duplique utilizando el operador <<.

// Lo divida entre 2 usando el operador >>.

// Devuelva un objeto con los valores resultantes.

const manipularBits = (numero) => {
  return { duplicado: numero << 1, dividido: numero >> 1 };
};

console.log(manipularBits(4));
