// Gestión de Inventario

// Crea una función que gestione un inventario de productos.
// Esta función debe permitir realizar las siguientes operaciones:

// 1. Añadir nuevos productos con las siguientes propiedades:
//    - nombre: string
//    - cantidad: number
//    - precio: number

// Decidí hacer la lógica de este ejercicio iterando en un array declarado globalmente

let inventario = [];

const añadirProductos = (productos = []) => {
  inventario = [...inventario];

  productos.forEach(({ nombre, cantidad, precio }) => {
    if (
      typeof nombre !== "string" ||
      typeof cantidad !== "number" ||
      typeof precio !== "number"
    ) {
      console.error(
        `Error: ${nombre} no tiene el tipo correcto en alguno de sus datos, no se agregó el producto.`
      );
      return;
    }

    inventario = [...inventario, { nombre, cantidad, precio }];
  });
};

añadirProductos([
  // { nombre: "Playera Blanca", cantidad: "10", precio: 30 },
  { nombre: "Playera Verde", cantidad: 10, precio: 10 },
  { nombre: "Playera Roja", cantidad: 10, precio: 20 },
  { nombre: "Playera Amarilla", cantidad: 10, precio: 30 },
  { nombre: "Playera Azul", cantidad: 10, precio: 40 },
]);

console.log(inventario);

// 2. Eliminar productos del inventario por su nombre o ID. (Estoy alterando el array original)

const eliminarProductoPorNombre = (nombre) =>
  (inventario = [
    ...inventario.filter((producto) => producto.nombre !== nombre),
  ]);

console.log(eliminarProductoPorNombre("Playera Roja"));

// 3. Filtrar productos cuyo precio sea mayor a un valor dado.

const filtrarPorPrecioMayor = (precio) =>
  inventario.filter((producto) => producto.precio > precio);

console.log("Productos", inventario);

filtrarPorPrecioMayor(20);

// 4. Ordenar los productos por cantidad, de mayor a menor.

const ordenarMayorAMenor = () => inventario.sort((a, b) => b.precio - a.precio);

console.log(ordenarMayorAMenor());
