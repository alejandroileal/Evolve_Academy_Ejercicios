// Validación de Disponibilidad de Productos

// Dado un array de objetos representando productos (nombre, stock), escribe una función que:

// Devuelva true si todos los productos tienen stock disponible (stock > 0).

// Devuelva false en caso contrario.

const productos = [
  { nombre: "Laptop", stock: 5 },
  { nombre: "Teclado", stock: 10 },
  { nombre: "Mouse", stock: 2 },
  { nombre: "Monitor", stock: 1 },
];

const validarDisponibilidad = (productos) => {
  let validacion = true;

  productos.forEach((producto) => {
    if (producto.stock <= 0) {
      validacion = false;
    }
  });

  return validacion;
};

console.log(validarDisponibilidad(productos));
