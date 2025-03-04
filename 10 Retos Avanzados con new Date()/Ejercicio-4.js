// Determinar si una persona nació en un año bisiesto y su edad en días exactos

// Crea una función que reciba una fecha de nacimiento y determine si la persona nació en un año bisiesto. Además, calcula su edad exacta en días, considerando los años bisiestos y la cantidad de días de cada mes.

const calculateAgeInDays = (birthDate) => {
  const birthYear = birthDate.getFullYear();
  const leapYear =
    (birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0;

  const today = new Date();

  const diffInMilliseconds = today - birthDate;
  const ageInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return {
    birthYear,
    leapYear,
    ageInDays,
  };
};

const birthDate = new Date("2000-02-29");
const result = calculateAgeInDays(birthDate);
console.log(result);
