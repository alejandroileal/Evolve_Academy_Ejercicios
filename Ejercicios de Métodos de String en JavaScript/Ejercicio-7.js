//  Eliminar espacios innecesarios

// Crear una función que reciba un array de frases y devuelva un nuevo array con cada frase sin espacios al inicio ni al final.

const frases = [
  "  Hola mundo  ",
  " Hoy es lunes   ",
  "   Ejemplo de ejercicio ",
  " Última frase del array   ",
];

const eliminarEspaciosInnecesarios = (frases) =>
  frases.map((frase) => frase.trim());

console.log(eliminarEspaciosInnecesarios(frases));
