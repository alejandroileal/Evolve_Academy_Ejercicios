// Análisis de Palabras en un Texto

// Dado un párrafo de texto:

const texto = "El sol brilla sobre el cielo azul y brillante";

// Convierte el texto en un array de palabras. (Lo divido por espacios)

const textoEnArray = texto.split(" ");
console.log(textoEnArray);

// Filtra las palabras que tienen más de 5 letras.

console.log(textoEnArray.filter((palabra) => palabra.length > 5));

// Ordena las palabras de forma descendente por longitud.

console.log(textoEnArray.sort((a, b) => b.length - a.length));
