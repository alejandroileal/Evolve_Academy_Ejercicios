// Transformación de Strings en un Array de Objetos

// Dado un array de nombres en formato string, escribe una función que:

// Devuelva un nuevo array de objetos con la propiedad nombre en mayúsculas y longitud con el número de caracteres de cada nombre.

const nombres = ["Alejandro", "Andoni", "Vivianne", "Andrea"];

const transformarNombresEnObjetos = (nombres) =>
  nombres.map((nom) => {
    return { nombre: nom.toUpperCase(), longitud: nom.length };
  });

console.log(transformarNombresEnObjetos(nombres));
