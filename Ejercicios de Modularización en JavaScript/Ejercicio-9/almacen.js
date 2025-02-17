// Control de Stock en un Almacén 📦

// 📌 Objetivo: Gestiona productos en un almacén con manipulación avanzada.

export const almacen = [];

// ✅ Agregar productos con stock.

export const agregarProducto = (producto, stock) =>
  almacen.push({ producto, stock });

// ✅ Eliminar un producto (pop).

export const eliminarProducto = () => almacen.pop();

// ✅ Filtrar productos con stock bajo (filter).

export const filtrarProductos = (stockMaximo) =>
  almacen.filter((producto) => producto.stock < stockMaximo);

// ✅ Ordenar productos por stock (sort).

export const ordenarProductosPorStock = () =>
  almacen.sort((a, b) => b.stock - a.stock);
