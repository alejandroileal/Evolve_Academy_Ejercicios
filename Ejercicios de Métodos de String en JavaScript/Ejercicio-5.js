// Censurar palabras de un texto

// Dado un texto y un array de palabras prohibidas, crear una función que reemplace cada aparición de una palabra prohibida con asteriscos del mismo tamaño que la palabra censurada.

const texto =
  "Este es un mensaje secreto con palabras prohibidas como hack y fraude.";

const palabrasProhibidas = ["secreto", "hack", "fraude"];

const censurarPalabrasProhibidas = (texto, palabrasProhibidas) => {
  palabrasProhibidas.forEach((palabra) => {
    texto = texto.replaceAll(palabra, "*".repeat(palabra.length));
  });
  return texto;
};
console.log(censurarPalabrasProhibidas(texto, palabrasProhibidas));
