const {
  pedidos,
  agegarPedido,
  eliminarPedido,
  obtenerNombreDePlatillos,
  contarPedidos,
  buscarPedidoPorCliente,
  buscarPedidosPorPlatillo,
} = require("./Ejercicio-2/restaurante");

agegarPedido([
  { id: 1, cliente: "Alejandro", platillo: "Lasagna" },
  { id: 1, cliente: "Andoni", platillo: "Gnoccis" },
  { id: 1, cliente: "Daniel", platillo: "Lasagna" },
  { id: 1, cliente: "Daniel", platillo: "Gnocceti" },
]);

//console.log(pedidos);

//console.log(eliminarPedido());

//console.log(contarPedidos());

// console.log(buscarPedidoPorCliente("Andoni"));

//console.log(obtenerNombreDePlatillos());

console.log(buscarPedidosPorPlatillo("Gno"));
