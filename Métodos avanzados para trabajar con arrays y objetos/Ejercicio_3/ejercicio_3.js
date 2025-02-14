const filtrarPalabras = (palabras) => {
  let nuevoArreglo = [];

  palabras.forEach((palabra) => {
    if (palabra.length > 5) {
      nuevoArreglo = [...nuevoArreglo, palabra];
    }
  });

  return nuevoArreglo;
};

console.log(
  filtrarPalabras(["elefante", "águila", "cielo", "oso", "universo"])
);
