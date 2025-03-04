// Sumar tiempo y comparar

// Crea una fecha para el 1 de junio de 2025. Suma 7 días y 3 horas. Luego, compara si la nueva fecha es anterior a una fecha futura, como el 10 de junio de 2025.

const moment = require("moment-timezone");

const date = moment("2025-06-01", "YY-MM-DD");

const newDate = date.clone().add(7, "days").add(3, "hours");

console.log({
  fechaOriginal: date.format("DD MMMM YYYY"),
  fechaModificada: newDate.format("DD MMMM YYYY"),
  esAnterior: newDate.isBefore(date),
});
