function contarTipos(tiposAContar) {
  const tipos = {};

  tiposAContar.forEach((elemento) => {
    let tipoDeDato = typeof elemento;
    tipos[tipoDeDato] = (tipos[tipoDeDato] || 0) + 1;
  });

  console.log(tipos);
}

contarTipos([1, "hola", true, 42, false, "mundo", null, undefined]);
