const invertirObjeto = (objeto) => {
  const nuevoObjeto = {};

  for (let propiedad in objeto) {
    nuevoObjeto[objeto[propiedad]] = propiedad;
  }

  return nuevoObjeto;
};

console.log(invertirObjeto({ a: "uno", b: "dos", c: "tres" }));
