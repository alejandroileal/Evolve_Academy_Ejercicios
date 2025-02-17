// Sistema de Gestión de Pedidos de Restaurante 🍽️

// 📌 Objetivo: Maneja los pedidos de un restaurante con operaciones avanzadas.

const pedidos = [];

// ✅ Agregar pedidos con ID, cliente y platillo. (Al indicar que es 'Pedidos' en plural, he decidido hacer un)

const agegarPedido = (nuevosPedidos) =>
  nuevosPedidos.forEach((pedido) => {
    pedidos.push(pedido);
  });

// ✅ Eliminar el primer pedido en la cola (shift).

const eliminarPedido = () => pedidos.shift();

// ✅ Contar la cantidad total de pedidos (length).

const contarPedidos = () => pedidos.length;

// ✅ Encontrar pedidos de un cliente específico (find).

const buscarPedidoPorCliente = (nombreDelCliente) =>
  pedidos.find((pedido) => pedido.cliente === nombreDelCliente);

// ✅ Obtener solo los nombres de los platillos (map).

const obtenerNombreDePlatillos = () => pedidos.map((pedido) => pedido.platillo);

// ✅ Saber si hay pedidos de un platillo específico (includes).

const buscarPedidosPorPlatillo = (nombreDePlatillo) => {
  const ordenes = [];

  pedidos.forEach((orden) => {
    if (orden.platillo.toLowerCase().includes(nombreDePlatillo.toLowerCase())) {
      ordenes.push(orden);
    }
  });
  return ordenes;
};

module.exports = {
  pedidos,
  agegarPedido,
  eliminarPedido,
  contarPedidos,
  buscarPedidoPorCliente,
  obtenerNombreDePlatillos,
  buscarPedidosPorPlatillo,
};
