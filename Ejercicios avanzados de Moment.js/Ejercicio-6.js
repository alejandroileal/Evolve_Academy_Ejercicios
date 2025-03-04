// Formato personalizado

// Crea una fecha para el 25 de diciembre de 2025. Muestra esta fecha en formato "El día DD de MMMM de YYYY es un dddd".

const moment = require("moment-timezone");

const date = moment("2025-12-25").format(
  "[El] DD [de] MMMM [de] YYYY [es un] dddd "
);

console.log(date);
