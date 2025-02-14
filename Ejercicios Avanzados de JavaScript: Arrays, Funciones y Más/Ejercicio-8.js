// Gestión de Carrito de Compras

// Simula un carrito de compras:

const carrito = [
  { producto: "Laptop", precio: 800 },
  { producto: "Ratón", precio: 20 },
];

// Añade productos usando push.

carrito.push({ producto: "Teclado", precio: 30 });
carrito.push({ producto: "Monitor", precio: 100 });
carrito.push({ producto: "Bocina", precio: 300 });

console.log(carrito);

// Elimina el último producto con pop.

carrito.pop();

console.log(carrito);

// Calcula el precio total del carrito.

let precioTotal = 0;

carrito.forEach((item) => (precioTotal += item.precio));

console.log(precioTotal);

// Ordena los productos por precio.

carrito.sort((a, b) => a.precio - b.precio);

console.log(carrito);
