// Aplicación de Notas y Recordatorios 📅

// // 📌 Objetivo: Diseña un sistema de notas con recordatorios.

export const notas = [];

// // ✅ Agregar notas con título y prioridad.

export const agregarNota = (nota, titulo, prioridad) =>
  notas.push({ nota, titulo, prioridad });

// // ✅ Filtrar notas urgentes (filter).

export const filtrarNotasUrgentes = () =>
  notas.filter((nota) => nota.prioridad > 0);

// // ✅ Ordenarlas por prioridad (sort).

export const ordenarNotasPorPrioridad = () =>
  notas.sort((a, b) => b.prioridad - a.prioridad);

// // ✅ Buscar una nota específica (find).

export const buscarNota = (titulo) =>
  notas.find((nota) => nota.titulo === titulo);
