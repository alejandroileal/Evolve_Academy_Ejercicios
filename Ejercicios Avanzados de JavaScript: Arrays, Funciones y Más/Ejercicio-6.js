// Análisis de Datos Climáticos

// Dado un array de temperaturas:

const temperaturas = [22, 28, 18, 15, 32, 25];

// Encuentra la temperatura más alta y la más baja.

const encontrarTemperaturaAlta = (temperaturas) => {
  let primerNúmero = temperaturas[0];
  let númeroMayor = primerNúmero;
  let númeroMenor = primerNúmero;
  let i = 0;

  temperaturas.forEach((temperatura) => {
    if (númeroMayor < temperaturas[i]) {
      númeroMayor = temperaturas[i];
    } else if (númeroMenor > temperaturas[i]) {
      númeroMenor = temperaturas[i];
    }
    i++;
  });

  return { temperaturaAlta: númeroMayor, temperaturaBaja: númeroMenor };
};

console.log(encontrarTemperaturaAlta(temperaturas));

// Filtra las temperaturas por encima de la media.

const filtrarEncimaDeLaMedia = (temperaturas) => {
  let sumaTotal = 0;
  temperaturas.forEach((temperatura) => {
    sumaTotal += temperatura;
  });

  return temperaturas.filter(
    (temperatura) => temperatura > sumaTotal / temperaturas.length
  );
};

// console.log(filtrarEncimaDeLaMedia(temperaturas));

// Convierte todas las temperaturas de Celsius a Fahrenheit.

const convertirDeCelciusAFarenheit = (temperaturas) =>
  temperaturas.map((temperatura) => temperatura * 1.8 + 32);

// console.log(convertirDeCelciusAFarenheit(temperaturas));
