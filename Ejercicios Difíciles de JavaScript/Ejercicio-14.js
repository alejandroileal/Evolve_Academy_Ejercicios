// Generación de Números Aleatorios con Redondeo y Registro

// Escribe una función que genere n números aleatorios entre 0 y 100. Cada número generado debe ser redondeado al entero más cercano utilizando Math.round(). Además, la función debe almacenar cada número junto con su versión antes de ser redondeado en un array de objetos con la siguiente estructura:

// jsCopiarEditar{ original: <número sin redondear>, redondeado: <número redondeado> }

const generateRoundedRandomNumbers = (n) =>
  Array.from({ length: n }, () => {
    const original = Math.random() * 100;
    const redondeado = Math.round(original);
    return { original, redondeado };
  });

const randomNumbers = generateRoundedRandomNumbers(5);
console.log(randomNumbers);
