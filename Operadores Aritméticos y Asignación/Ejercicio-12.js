// Cálculo del Producto Total en una Lista de Compras

// Dado un array de objetos (nombre, precio, cantidad), escribe una función que:

// Multiplique el precio por la cantidad de cada producto.

// Devuelva la suma total de todos los productos.

const productos = [
  { nombre: "Laptop", cantidad: 1, precio: 300 },
  { nombre: "Teclado", cantidad: 3, precio: 30 },
  { nombre: "Mouse", cantidad: 5, precio: 20 },
  { nombre: "Monitor", cantidad: 2, precio: 200 },
];

const calcularTotal = (productos) => {
  let sumaTotal = 0;

  productos.forEach((producto) => {
    const precioPorCantidad = producto.precio * producto.cantidad;
    sumaTotal += precioPorCantidad;
  });

  return sumaTotal;
};

console.log(calcularTotal(productos));
