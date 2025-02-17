// Registro de Alumnos y Promedios de Notas 🎓

// 📌 Objetivo: Diseña un sistema para gestionar alumnos y sus notas.

const alumnos = [
  { nombre: "Carlos", notas: [7, 8, 6, 9] },
  { nombre: "Elena", notas: [5, 6, 5, 7] },
  { nombre: "Luis", notas: [9, 10, 9, 8] },
  { nombre: "Sofía", notas: [6, 7, 7, 8] },
  { nombre: "Fernando", notas: [4, 5, 3, 6] },
  { nombre: "Martina", notas: [8, 9, 8, 7] },
];

// ✅ Agregar alumnos con nombre y array de notas.

const agregarAlumno = (nombre, notas) => alumnos.push({ nombre, notas });

// ✅ Calcular el promedio de cada alumno (map).

const calcularPromedio = () =>
  alumnos.map((alumno) => ({
    alumno: alumno.nombre,
    promedio:
      alumno.notas.reduce((acumulador, nota) => acumulador + nota, 0) /
      alumno.notas.length,
  }));

// ✅ Filtrar alumnos aprobados (filter).

const filtrarAprobados = (listaConPromedios) =>
  listaConPromedios.filter((alumno) => alumno.promedio > 6);

// ✅ Ordenar alumnos por promedio (sort).

const ordenarPorPromedio = (listaConPromedios) =>
  listaConPromedios.sort((a, b) => b.promedio - a.promedio);

// ✅ Buscar un alumno por nombre (find).

const buscarPorNombre = (nombreABuscar) =>
  alumnos.find(
    (alumno) => alumno.nombre.toLowerCase() === nombreABuscar.toLowerCase()
  );

module.exports = {
  alumnos,
  agregarAlumno,
  calcularPromedio,
  filtrarAprobados,
  ordenarPorPromedio,
  buscarPorNombre,
};
