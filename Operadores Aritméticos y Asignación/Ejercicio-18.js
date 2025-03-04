// Creación de una Lista de Invitados con Doble Confirmación

// Dado un array de nombres y otro de booleanos representando confirmaciones (true/false), escribe una función que:

// Devuelva solo los nombres de los invitados que confirmaron su asistencia.

const nombres = ["Alejandro", "María", "Carlos", "Sofía", "Javier"];
const confirmaciones = [true, false, true, true, false];

const crearListaDeConfirmados = (nombres, confirmaciones) =>
  nombres.filter((nombre, index) => confirmaciones[index]);

console.log(crearListaDeConfirmados(nombres, confirmaciones));
