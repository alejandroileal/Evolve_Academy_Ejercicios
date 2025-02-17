const {
  proyectos,
  agregarProyecto,
  filtrarProyectosEnProgreso,
  ordenarProyectosPorPrioridad,
  eliminiarÚltimoProyecto,
  convertirAListaLegible,
} = require("./proyecto.js");

console.log(proyectos);

console.log(agregarProyecto("Proyecto 1", "En Progreso", 1));

console.log(filtrarProyectosEnProgreso());

console.log(ordenarProyectosPorPrioridad());

console.log(eliminiarÚltimoProyecto());

console.log(convertirAListaLegible());
