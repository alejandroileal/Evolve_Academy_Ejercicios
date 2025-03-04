// Determinar la cantidad exacta de días hábiles entre dos fechas, excluyendo fines de semana y festivos

// Implementa una función que reciba dos fechas y devuelva la cantidad de días hábiles entre ellas, excluyendo sábados, domingos y festivos. La función debe permitir pasar un array de días festivos para hacer el cálculo dinámico.

const countBusinessDays = (startDate, endDate, holidays = []) => {
  let businessDays = 0;
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    const formattedDate = currentDate.toISOString().split("T")[0];

    if (
      dayOfWeek !== 0 &&
      dayOfWeek !== 6 &&
      !holidays.includes(formattedDate)
    ) {
      businessDays++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return `Días hábiles: ${businessDays}`;
};

const startDate = new Date("2025-03-01");
const endDate = new Date("2025-03-10");
const holidays = ["2025-03-04", "2025-03-08"];

console.log(countBusinessDays(startDate, endDate, holidays));
