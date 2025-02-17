// Control de Reservaciones en un Hotel 🏨

export const reservas = [];

// Agregar reservas con nombre y fecha.

export const agregarReserva = (nombre, fecha) =>
  reservas.push({ nombre, fecha: new Date(fecha) });

// Ordenar reservas por fecha (sort).

export const ordenarReservasPorFecha = () =>
  reservas.sort((a, b) => a.fecha - b.fecha);
