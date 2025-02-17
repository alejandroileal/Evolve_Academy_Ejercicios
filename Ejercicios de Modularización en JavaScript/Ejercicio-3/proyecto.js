// Gestor de Proyectos con Estados y Prioridades 📊

// 📌 Objetivo: Implementa un sistema para administrar proyectos con estados y prioridades.

const proyectos = [
  { nombre: "Proyecto 0", estado: "Completado", prioridad: 0 },
  { nombre: "Proyecto 2", estado: "En Progreso", prioridad: 0 },
  { nombre: "Proyecto 3", estado: "En Progreso", prioridad: 0 },
];

// ✅ Agregar proyectos con nombre, estado y prioridad.

const agregarProyecto = (nombre, estado, prioridad) => {
  proyectos.push({ nombre, estado, prioridad });

  return { mensaje: `${nombre} agregado correctamente.`, proyectos };
};

// ✅ Filtrar proyectos en estado "En progreso" (filter).

const filtrarProyectosEnProgreso = () =>
  proyectos.filter((proyecto) => proyecto.estado === "En Progreso");

// ✅ Ordenar proyectos por prioridad (sort).

const ordenarProyectosPorPrioridad = () =>
  proyectos.sort((a, b) => b.prioridad - a.prioridad);

// ✅ Eliminar el último proyecto agregado (pop).

const eliminiarÚltimoProyecto = () => proyectos.pop();

// ✅ Convertir proyectos a una lista legible (toString).

const convertirAListaLegible = () =>
  proyectos
    .map(
      (proyecto) =>
        `${proyecto.nombre} - Estado: ${proyecto.estado} - Prioridad: ${
          proyecto.prioridad === 1 ? "Alta" : "Baja"
        }`
    )
    .toString();

module.exports = {
  proyectos,
  agregarProyecto,
  filtrarProyectosEnProgreso,
  ordenarProyectosPorPrioridad,
  eliminiarÚltimoProyecto,
  convertirAListaLegible,
};
