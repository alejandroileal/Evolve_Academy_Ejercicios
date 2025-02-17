import {
  productos,
  agregarProducto,
  calcularPromedioDeCalificaciones,
} from "./productos.js";

agregarProducto("iPhone 16 Pro Max", [5, 4, 4, 5, 3, 5, 5]);
agregarProducto("Samsung Galaxy S24 Ultra", [5, 5, 4, 4, 4, 5]);
agregarProducto("MacBook Air M3", [4, 5, 4, 4, 5, 5]);
agregarProducto("Sony WH-1000XM5", [5, 5, 5, 4, 4, 5]);
agregarProducto("GoPro Hero 12 Black", [5, 4, 4, 4, 5, 4]);

console.log(productos);

console.log(calcularPromedioDeCalificaciones(productos[0].calificaciones));
