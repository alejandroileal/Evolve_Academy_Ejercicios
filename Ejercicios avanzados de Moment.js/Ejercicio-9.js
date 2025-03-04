// Fecha inválida y manejo de errores

// Crea una fecha con un valor inválido, como "2025-02-30". Usa el método isValid() para comprobar si la fecha es válida y muestra un mensaje apropiado según el resultado.

const moment = require("moment-timezone");

const wrongDate = moment("2025-02-30");

const isDateValid = wrongDate.isValid()
  ? "La fecha es válida"
  : "La fecha es inválida";

console.log(isDateValid);
