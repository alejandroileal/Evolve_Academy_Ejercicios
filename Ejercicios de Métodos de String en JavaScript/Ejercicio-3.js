//  Buscar una palabra dentro de un texto

// Crea una función que reciba un texto y una palabra, y determine si la palabra está presente dentro del texto, devolviendo un booleano.

const texto =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nihil distinctio expedita eius ad assumenda enim illo cupiditate officiis beatae, mollitia architecto culpa minus maiores quaerat aperiam quibusdam quo officia";

const palabra = "enim";

const buscarPalabraEnTexto = (texto, palabra) =>
  texto.split(" ").includes(palabra);

console.log(buscarPalabraEnTexto(texto, palabra));
