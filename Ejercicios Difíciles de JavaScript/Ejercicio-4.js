// Filtrado de Objetos Basado en Valores Absolutos

// Dado un array de objetos donde cada objeto tiene una propiedad valor, escribe una función que elimine todos los objetos cuyo valor absoluto sea menor o igual a un umbral definido. La función debe utilizar Math.abs() para determinar los valores absolutos y retornar un nuevo array con los objetos que cumplen la condición.

const filterByAbsoluteValue = (objects, threshold) =>
  objects.filter((obj) => Math.abs(obj.valor) > threshold);

const data = [
  { valor: -5 },
  { valor: 10 },
  { valor: -3 },
  { valor: 7 },
  { valor: -15 },
  { valor: 2 },
];

const filteredData = filterByAbsoluteValue(data, 3);
console.log(filteredData);
