// Contador con Reset 🔄

// Extiende el contador del ejercicio 1 agregando una función para reiniciar el contador a cero.

const crearContador = () => {
  let contador = 0;

  return {
    aumentarContador: () => ++contador,
    reiniciarContador: () => (contador = 0),
  };
};

const contador = crearContador();

console.log(contador.aumentarContador());
console.log(contador.reiniciarContador());
