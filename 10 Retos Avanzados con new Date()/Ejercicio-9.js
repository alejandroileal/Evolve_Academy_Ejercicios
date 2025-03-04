// Calcular el tiempo restante hasta la medianoche en una zona horaria específica

// Crea una función que reciba una zona horaria y devuelva el tiempo exacto que falta hasta la medianoche en esa zona horaria. El resultado debe expresarse en horas, minutos y segundos.

const timeUntilMidnight = (timeZone) => {
  const now = new Date();
  const extractedTime = now.toISOString().split("T")[1].split(":");

  const remainingHours = 23 - extractedTime[0];
  const remainingMinutes = 59 - extractedTime[1];
  const remainingSeconds = 59 - parseFloat(extractedTime[2]);

  return {
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  };
};

const timeZone = "Europe/Madrid";
console.log(
  `Tiempo hasta la medianoche en ${timeZone}:`,
  timeUntilMidnight(timeZone)
);
