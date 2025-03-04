// Histograma de Ocurrencias en un Array de Números

// Dado un array de números, crea un objeto donde:

// Las claves sean los números únicos del array.

// Los valores sean la cantidad de veces que aparecen en el array.

const numeros = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6, 6];

const generarHistoriograma = (numeros) => {
  let numerosÚnicos = [];
  let historiograma = {};

  numeros.forEach(
    (numero) => !numerosÚnicos.includes(numero) && numerosÚnicos.push(numero)
  );

  numerosÚnicos.forEach((num) => {
    historiograma[num] = numeros.filter((n) => n === num).length;
  });

  return historiograma;
};

console.log(generarHistoriograma(numeros));
