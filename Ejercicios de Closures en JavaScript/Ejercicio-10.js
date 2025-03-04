// Fábrica de Multiplicadores ✖️

// Crea una función crearMultiplicador que tome un número como argumento y devuelva una función que multiplique cualquier número por el valor inicial.

const crearMultiplicador = (multiplicador) => {
  return (num) => num * multiplicador;
};

const porTres = crearMultiplicador(3);

console.log(porTres(3));
