// Determinar el número de viernes 13 en un año específico

// Crea una función que reciba un año y devuelva cuántos viernes 13 ocurren en ese año. Recuerda que un viernes 13 ocurre si el día 13 de un mes cae en viernes. Tu solución debe iterar sobre todos los meses y contar cuántas veces sucede.

const countFriday13 = (year) => {
  let count = 0;

  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }

  return `Viernes 13 en el año ${year}: ${count}`;
};

const year = 2026;
console.log(countFriday13(year));
