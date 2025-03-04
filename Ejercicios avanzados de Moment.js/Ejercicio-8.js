// Manipulación compleja de fechas

// Crea una fecha para el 1 de marzo de 2023. Resta 4 meses y 10 días, y luego suma 1 año y 2 semanas a la nueva fecha. Muestra la fecha final en formato "DD-MM-YYYY".

const moment = require("moment-timezone");

const date = moment("2023-03-01");

const newDate = date
  .clone()
  .subtract(4, "months")
  .subtract(10, "days")
  .add(1, "year")
  .add(2, "weeks");

console.log(newDate.format("DD-MM-YYYY"));
