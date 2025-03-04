// Determinar si un texto contiene una palabra prohibida

// Dado un texto y un array de palabras prohibidas, escribir una función que devuelva true si alguna de las palabras prohibidas está presente en el texto, y false en caso contrario.

const texto = "Este es un texto en donde analizo las palabras prohibidas";
const palabrasProhibidas = ["texto", "palabras"];

const encontrarPalabrasProhibidas = (texto, palabrasProhibidas) => {
  let identificador = false;
  palabrasProhibidas.forEach((palabraProhibida) =>
    texto.includes(palabraProhibida)
      ? (identificador = true)
      : (identificador = false)
  );
  return identificador;
};

console.log(encontrarPalabrasProhibidas(texto, palabrasProhibidas));
