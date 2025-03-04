// Operadores de Incremento, Decremento y Bitwise

// 7️⃣ Manipulación de un Contador con ++ y --

// Dado un objeto contador con la propiedad valor, crea una función que:

const contador = { valor: 3 };

// Incremente valor en 2 si es par.

// Decremente valor en 1 si es impar.

// Devuelva el objeto actualizado.

const modificarContador = (contador) =>
  contador.valor % 2 === 0
    ? { valor: (contador.valor += 2) }
    : { valor: (contador.valor -= 1) };

console.log(modificarContador(contador));
