// Comparación de fechas

// Compara dos fechas: una para el 10 de febrero de 2025 y otra para el 12 de febrero de 2025. Usa los métodos isBefore(), isAfter() y isSame() para verificar cuál es anterior, cuál es posterior, y si son iguales.

const moment = require("moment");

const firtsDate = moment("2025-02-10");
const secondDate = moment("2025-02-12");

const dateComparison = [
  { isBefore: secondDate.isBefore(firtsDate) },
  { isAfter: secondDate.isAfter(firtsDate) },
  { isSame: secondDate.isSame(firtsDate) },
].filter(
  (comparison) => comparison.isAfter || comparison.isBefore || comparison.isSame
);

console.log(dateComparison);
