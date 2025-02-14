// Gestión de Inventario de Productos (Avanzado con Spread)

// Tienes un array de objetos representando productos:

const inventario1 = [
  { nombre: "Laptop", cantidad: 10, precio: 800 },
  { nombre: "Teclado", cantidad: 20, precio: 30 },
];

const inventario2 = [
  { nombre: "Ratón", cantidad: 15, precio: 10 },
  { nombre: "Monitor", cantidad: 5, precio: 200 },
];

// Añade nuevos productos sin modificar el array original usando spread.

const añadirProductos = (inventario, nuevoProducto) => [
  ...inventario,
  nuevoProducto,
];

console.log(
  añadirProductos(inventario1, { nombre: "Teclado", cantidad: 10, precio: 200 })
);

// Actualiza el precio de un producto específico. (Estoy iterando en una copia del array, pero no estoy seguro de que si debo de operar en el original)

function actualizarPrecio(inventario, nombreDelProducto, nuevoPrecio) {
  return inventario.map((producto) =>
    producto.nombre === nombreDelProducto
      ? { ...producto, precio: nuevoPrecio }
      : producto
  );
}

console.log(actualizarPrecio(inventario2, "Ratón", 900));

// Elimina productos con stock igual a 0. (Agregué el limpiador de pantalla con el stocj en cero)

inventario2.push({ nombre: "Limpiador de Pantalla", cantidad: 0, precio: 30 });
inventario2.push({ nombre: "Cable USB", cantidad: 1, precio: 5 });

const eliminarInventarioEnCero = (inventario) =>
  inventario.filter((producto) => producto.cantidad !== 0);

console.log(eliminarInventarioEnCero(inventario2));

// Combina dos inventarios diferentes sin duplicados. (Lo decidí hacer sin función, añadí un producto repetido)

inventario1.push({ nombre: "Ratón", cantidad: 15, precio: 10 });

function combinarInventarios(inventario1, inventario2) {
  const combinado = [...inventario1];
  inventario2.forEach((prod) => {
    if (!combinado.some((p) => p.nombre === prod.nombre)) {
      combinado.push(prod);
    }
  });
  return combinado;
}

console.log(combinarInventarios(inventario1, inventario2));

//Ratón sólo debe de aparecer una vez
