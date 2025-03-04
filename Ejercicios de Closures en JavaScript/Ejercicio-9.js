// Controlador de Eventos Personalizado 🎛

// Escribe una función crearManejadorEventos que permita registrar y ejecutar múltiples funciones de callback asociadas a un evento.

const crearManejadorEventos = () => {
  const eventos = {};

  return {
    registrar: (evento, callback) => {
      eventos[evento] = callback;

      console.log(eventos);
    },
  };
};

const evento = crearManejadorEventos();

console.log(evento.registrar("clik", () => console.log("click")));
