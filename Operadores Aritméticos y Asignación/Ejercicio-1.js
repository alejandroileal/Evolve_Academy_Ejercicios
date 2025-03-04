// Modificación de un Array Numérico con Operaciones Matemáticas

// Dado un array de números enteros positivos, escribe una función que:

const numeros = [3, 5, 4, 8, 8, 22];

// Multiplique los números en posiciones pares por 2 y los de posiciones impares por 3.

// Reste 5 a todos los números mayores de 10.

// Devuelva el nuevo array con los valores modificados.

const modificarArray = () =>
  numeros.map((numero, indice) => {
    let nuevoNumero = 0;

    if (indice % 2 === 0) {
      nuevoNumero = numero * 2;
    } else {
      nuevoNumero = numero * 3;
    }

    if (nuevoNumero > 10) {
      nuevoNumero -= 5;
    }

    return nuevoNumero;
  });

console.log(numeros);
console.log(modificarArray());
