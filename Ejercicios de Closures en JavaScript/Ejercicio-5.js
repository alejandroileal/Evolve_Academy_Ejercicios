// Generador de Identificadores Únicos 🔢

// Implementa una función crearGeneradorId que devuelva una función que, cada vez que se invoque, retorne un ID único incremental.

const crearGeneradorId = () => {
  let id = 0;

  return () => id++;
};

const id = crearGeneradorId();

console.log(id());
console.log(id());
console.log(id());
