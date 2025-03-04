// Redondeo Inteligente al Entero Más Cercano

// Desarrolla una función que tome un array de números y los redondee al entero más cercano utilizando Math.round(). Sin embargo, si el número tiene exactamente .5 como decimal, en lugar de redondearlo con la regla estándar, la función debe redondearlo hacia el número par más cercano.

const smartRound = (numbers) =>
  numbers.map((num) => {
    const decimalPart = num % 1;

    return decimalPart === 0.5 || decimalPart === -0.5
      ? Math.floor(num)
      : Math.round(num);
  });

const numbers = [1.5, 2.6, 3.5, 4.5, -1.4, -2.5, -3.5, -4.2, 0.5, -0.9];
const roundedNumbers = smartRound(numbers);
console.log(roundedNumbers);
