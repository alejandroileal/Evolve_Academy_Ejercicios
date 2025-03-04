// Extraer una parte específica de un texto

// Dado un string, un índice de inicio y un índice de fin, extraer la parte correspondiente del texto sin incluir el índice final.

const extraerTexto = (palabra, indiceDeInicio, indiceFinal) =>
  palabra.slice(indiceDeInicio, indiceFinal);

console.log(extraerTexto("Hola", 1, 4));
