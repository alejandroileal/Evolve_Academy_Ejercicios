// Fecha con diferente zona horaria

// Crea una fecha para el 1 de mayo de 2025 a las 12:00 en la zona horaria de "Asia/Tokyo". Luego, muestra esta fecha en formato "YYYY-MM-DD HH:mm:ss" y en la zona horaria de "Europe/Madrid". ¿Cuál es la diferencia de hora entre ambas zonas?

const moment = require("moment-timezone");

const dateInTokyo = moment.tz("2025-05-01 12:00", "Asia/Tokyo");

const dateInMadrid = dateInTokyo.clone().tz("Europe/Madrid");

console.log({
  tokio: dateInTokyo.format("YYYY-MM-DD HH:mm:ss"),
  madrid: dateInMadrid.format("YYYY-MM-DD HH:mm:ss"),
  diferenciaEnHoras: (dateInTokyo.utcOffset() - dateInMadrid.utcOffset()) / 60,
});
