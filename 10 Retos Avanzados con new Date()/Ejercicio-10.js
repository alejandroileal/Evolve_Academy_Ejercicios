// Generar un calendario con las fechas de todos los lunes de un año específico

// Escribe una función que reciba un año y devuelva un array con las fechas de todos los lunes de ese año en formato "YYYY-MM-DD". La solución debe iterar por los 52 o 53 lunes que puede haber en un año.

const getAllMondays = (year) => {
  let mondays = [];
  let date = new Date(year, 0, 1);

  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + 1);
  }

  while (date.getFullYear() === year) {
    mondays.push(date.toISOString().split("T")[0]);
    date.setDate(date.getDate() + 7);
  }

  return { lunes: mondays, total: mondays.length };
};

const year = 2024;
console.log(getAllMondays(year));
