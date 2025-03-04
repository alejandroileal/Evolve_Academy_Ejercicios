// Contador Privado 🧮

// Crea una función crearContador que devuelva una función que incremente y retorne un contador privado cada vez que se llame.

const crearContador = () => {
  let contador = 0;

  return function () {
    return ++contador;
  };
};

const contador = crearContador();

console.log(contador());
console.log(contador());
console.log(contador());
