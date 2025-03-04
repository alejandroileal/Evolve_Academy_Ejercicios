// Verificar si una frase termina en una palabra específica

// Dada una frase y una palabra, escribir una función que determine si la frase termina con esa palabra específica y devuelva un booleano.

const frase = "Esta es una frase de ejemplo";
const palabra = "Ejemplo";

const verificarTerminación = (frase, palabra) =>
  frase.toLowerCase().endsWith(palabra.toLowerCase());

console.log(verificarTerminación(frase, palabra));
