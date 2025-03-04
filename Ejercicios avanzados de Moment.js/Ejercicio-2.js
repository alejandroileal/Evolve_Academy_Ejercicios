// Manipulación de fechas y formato

// Crea una fecha que corresponda al 15 de agosto de 2023. Suma 2 semanas a esta fecha. Luego, muestra el nuevo valor de la fecha en formato "dddd, MMMM Do YYYY".

const moment = require("moment");

const fecha = moment("2023-08-15");

fecha.add(14, "days");

console.log(fecha.format("MMMM Do YYYY"));
