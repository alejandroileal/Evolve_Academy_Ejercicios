// Diferencia en años, meses y días

// Crea dos fechas: una para el 1 de enero de 2020 y otra para el 15 de marzo de 2025. Calcula la diferencia en años, meses y días entre ambas fechas y muestra el resultado en consola.

const moment = require("moment-timezone");

const firstDate = moment("2020-01-01");
const secondDate = moment("2025-03-15");

const differences = {
  years: secondDate.diff(firstDate, "years"),
  months: secondDate.diff(firstDate, "months"),
  days: secondDate.diff(firstDate, "days"),
};

console.log(differences);
