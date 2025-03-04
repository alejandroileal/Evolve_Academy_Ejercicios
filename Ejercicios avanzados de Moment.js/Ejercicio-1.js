// Diferencia de fechas en días

// Crea dos fechas: una para el 1 de diciembre de 2024 y otra para el 25 de diciembre de 2024. Calcula la diferencia entre ambas fechas en días y muestra el resultado en consola. ¿Cuántos días hay entre ambas fechas?

const moment = require("moment");

const startDate = moment("2024-12-01", "YYYY-MM-DD");
const endDate = moment("2024-12-25", "YYYY-MM-DD");

const differenceInDays = endDate.diff(startDate, "days");

console.log(
  `La diferencia entre el ${startDate.format(
    "MMMM Do YYYY"
  )} y el ${endDate.format("MMMM Do YYYY")} es de ${differenceInDays} días.`
);
