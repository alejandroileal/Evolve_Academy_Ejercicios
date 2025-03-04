// Registro de Mensajes 📝

// Crea una función crearLogger que devuelva una función para registrar mensajes con un historial que no pueda modificarse desde fuera.

const crearLogger = () => {
  const historial = [];

  return {
    registrarMensaje: (mensaje) => historial.push(mensaje),
    verHistorial: () => [...historial],
  };
};

const logger = crearLogger();

console.log(logger.registrarMensaje("Hola"));
console.log(logger.registrarMensaje("Hola 2"));
console.log(logger.verHistorial());
