// Restar fechas en meses

// Crea una fecha para el 1 de enero de 2025 y otra para el 1 de octubre de 2025. Calcula la diferencia en meses entre estas dos fechas y muestra el resultado en consola.

const moment = require("moment-timezone");

const firstDate = moment("2025-01-01");
const secondDate = moment("2025-10-01");

console.log(secondDate.diff(firstDate, "months"));
