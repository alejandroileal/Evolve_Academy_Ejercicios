// Calcular la diferencia exacta entre dos fechas en años, meses y días

// Escribe una función que reciba dos fechas y devuelva la diferencia exacta en años, meses y días. Ten en cuenta que los meses tienen diferentes cantidades de días y que los años bisiestos pueden afectar el cálculo. La función debe manejar correctamente los casos en los que la segunda fecha sea anterior a la primera.

const calculateDateDifference = (date1, date2) => {
  let temp = new Date(date1);
  let startDate = new Date(date1);
  let endDate = new Date(date2);

  if (startDate > endDate) {
    startDate = endDate;
    endDate = temp;
  }

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (days < 0) {
    months -= 1;
    let previousMonth = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0
    ).getDate();
    days += previousMonth;
    console.log(endDate.getFullYear(), endDate.getMonth());
  }

  return { years, months, days };
};

const date1 = "2020-03-15";
const date2 = "2024-07-10";
const difference = calculateDateDifference(date1, date2);
console.log(difference);
