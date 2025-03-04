// Generador de Prefijos ✏️

// Escribe una función crearPrefijo que tome un prefijo como argumento y devuelva una función que reciba una palabra y la retorne con el prefijo agregado.

const crearPrefijo = (prefijo) => {
  return function (palabra) {
    return prefijo + palabra;
  };
};

const prefijoRe = crearPrefijo("re");
console.log(prefijoRe("intentar"));
