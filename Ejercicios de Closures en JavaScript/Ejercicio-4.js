// Temporizador con Retardo ⏳

// Crea una función crearTemporizador que reciba un tiempo en segundos y devuelva una función que, al ser llamada, indique cuánto tiempo falta.

const crearTemporizador = (segundos) => () =>
  `Faltan ${segundos / 60} minutos.`;

const temp = crearTemporizador(60);

console.log(temp());
