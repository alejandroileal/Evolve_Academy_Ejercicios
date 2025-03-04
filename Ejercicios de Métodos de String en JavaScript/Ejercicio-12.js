// Dividir nombres y apellidos

// Crear una función que reciba un array de nombres completos y devuelva un array de objetos, donde cada objeto tenga las propiedades "nombre" y "apellido".

const nombres = ["Alejandro Irastorza", "Andoni Leal", "Gabriella Chemali"];

const dividirNombresYApellidos = (nombres) =>
  nombres.map((nombre) => {
    return { nombre: nombre.split(" ")[0], apellido: nombre.split(" ")[1] };
  });

console.log(dividirNombresYApellidos(nombres));
