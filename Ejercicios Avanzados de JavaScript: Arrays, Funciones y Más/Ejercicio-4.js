// 4️⃣ Gestión de Tareas (To-Do List)

// Crea un sistema de tareas donde puedas:

const tareas = [
  { tarea: "Comprar leche", completada: false },
  { tarea: "Estudiar JavaScript", completada: true },
];

// Añadir nuevas tareas.

const añadirTarea = (tareas, tareaNueva) => [...tareas, tareaNueva];

// console.log(
//   añadirTarea(tareas, { tarea: "Comprar limones", completada: false })
// );

// Marcar tareas como completadas.

const completarTareas = (tareas) =>
  tareas.map((tarea) => {
    tarea.completada = true;
    return tarea;
  });

// console.log(completarTareas(tareas));

// Filtrar tareas completadas e incompletas.

const filtrarTareas = (tareas) => {
  let completas = 0;
  let incompletas = 0;

  tareas.forEach((tarea) => {
    if (tarea.completada) {
      completas += 1;
    } else {
      incompletas += 1;
    }
  });

  return { completas, incompletas };
};

// console.log(filtrarTareas(tareas));

// Contar cuántas tareas están pendientes.

const contarPendientes = (tareas) =>
  tareas.filter((tarea) => !tarea.completada).length;

// console.log(contarPendientes(tareas));
