// Operaciones en un Inventario de Productos

// Dado un array de objetos con nombre y precio, crea una función que:

// Aumente el precio en un 15% si el precio original es menor a 20.

// Disminuya el precio en un 10% si el precio es mayor o igual a 50.

// Devuelva el array modificado.

const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Smartphone", precio: 800 },
  { nombre: "Tablet", precio: 500 },
  { nombre: "Auriculares", precio: 150 },
];

const modificarPrecios = (productos) => {
  return productos.map((producto) => {
    if (producto.precio < 20) {
      producto.precio *= 1.15;
    } else if (producto.precio >= 50) {
      producto.precio *= 0.9;
    }
    return producto;
  });
};

console.log(modificarPrecios(productos));
