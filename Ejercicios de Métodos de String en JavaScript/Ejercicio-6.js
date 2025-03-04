// Transformar nombres a formato estándar

// Crear una función que reciba un array de nombres en distintos formatos (mayúsculas, minúsculas, mezcladas) y devuelva un array donde cada nombre esté capitalizado correctamente, es decir, con la primera letra en mayúscula y el resto en minúscula.

const nombres = ["alejandro", "MARIA", "CaRlos", "soFÍA", "JAVIER"];

const homogeneizarNombres = (nombres) =>
  nombres.map(
    (nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()
  );

console.log(homogeneizarNombres(nombres));
