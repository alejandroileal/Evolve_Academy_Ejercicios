// Ajustar automáticamente una fecha a la última hora del día en una zona horaria específica

// Desarrolla una función que reciba una fecha y una zona horaria (por ejemplo, "America/Madrid") y ajuste la fecha a las 23:59:59 de ese mismo día en la zona horaria dada. Si la zona horaria no es válida, debe devolver un error.

const setToEndOfDayInSpain = (date, timeZone) => {
  date.setHours(23, 59, 59, 999);

  const dateInSpain = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59,
      999
    )
  );

  return dateInSpain.toLocaleString("es-ES", { timeZone });
};

const date = new Date("2025-02-24T10:30:00Z");
console.log(setToEndOfDayInSpain(date));
