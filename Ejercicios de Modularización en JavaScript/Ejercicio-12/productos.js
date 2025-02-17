// Plataforma de Evaluación de Productos ⭐

export const productos = [];

// Agregar productos con calificaciones.

export const agregarProducto = (producto, calificaciones) =>
  productos.push({ producto, calificaciones });

// Calcular el promedio de calificaciones (reduce).

export const calcularPromedioDeCalificaciones = (calificaciones) =>
  calificaciones.reduce(
    (acumulador, calificacion) => acumulador + calificacion,
    0
  ) / calificaciones.length;
