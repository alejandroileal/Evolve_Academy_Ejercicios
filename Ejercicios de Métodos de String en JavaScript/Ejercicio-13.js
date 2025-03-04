// Transformar un texto a mayúsculas y minúsculas alternadas

// Escribir una función que transforme una frase de manera que cada letra alterna entre mayúsculas y minúsculas.

const alternarLetras = (palabra) =>
  palabra
    .split("")
    .map((palabra, index) =>
      index % 2 === 0 ? palabra.toLowerCase() : palabra.toUpperCase()
    )
    .join("");

console.log(alternarLetras("Alejandro"));
