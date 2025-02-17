import {
  almacen,
  agregarProducto,
  eliminarProducto,
  filtrarProductos,
  ordenarProductosPorStock,
} from "./almacen.js";

agregarProducto("Laptop", 10);
agregarProducto("iPad", 5);
agregarProducto("iPhone 16 Pro", 98);
agregarProducto("iPhone 16 Pro Max", 60);

console.log(almacen);

console.log("Eliminar Producto: ", eliminarProducto());

console.log("Filtrar Productos: ", filtrarProductos(50));

console.log("Ordenar Por Stock: ", ordenarProductosPorStock());
