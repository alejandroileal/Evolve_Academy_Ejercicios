// Encontrar la fecha del último domingo de cada mes en un año dado

// Escribe una función que reciba un año y devuelva un array con las fechas exactas de los últimos domingos de cada mes. La solución debe iterar por todos los meses, encontrar el último día del mes y determinar si es domingo o retroceder hasta encontrarlo.

const getLastSundays = (year) => {
  let lastSundays = [];

  for (let month = 0; month < 12; month++) {
    let lastDay = new Date(year, month + 1, 0);

    while (lastDay.getDay() !== 0) {
      lastDay.setDate(lastDay.getDate() - 1);
    }

    console.log("LS", lastSundays);
    lastSundays.push(lastDay.toLocaleDateString());
  }

  return lastSundays;
};

// Example usage
const year = 2024;
console.log(`Last Sundays of ${year}:`, getLastSundays(year));
