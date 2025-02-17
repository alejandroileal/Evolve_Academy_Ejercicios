import { reservas, agregarReserva, ordenarReservasPorFecha } from "./hotel.js";

agregarReserva("Andrea", "2025-03-15");
agregarReserva("Carlos", "2024-12-01");
agregarReserva("Elena", "2025-01-20");
agregarReserva("Luis", "2024-11-25");
agregarReserva("Sofía", "2025-02-10");

console.log(reservas);

console.log("Ordenar Por Fecha: ", ordenarReservasPorFecha());
