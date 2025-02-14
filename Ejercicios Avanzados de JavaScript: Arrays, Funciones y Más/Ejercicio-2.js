// Análisis de Notas de Estudiantes

// Tienes un array de objetos con el nombre de los estudiantes y sus calificaciones.

const estudiantes = [
  { nombre: "Juan", nota: 8 },
  { nombre: "Ana", nota: 5 },
  { nombre: "Carlos", nota: 7 },
];

// Filtra a los estudiantes que aprobaron (nota ≥ 6).

const filtrarAprobados = (listaDeEstudiantes) =>
  listaDeEstudiantes.filter((estudiante) => estudiante.nota >= 6);

console.log(filtrarAprobados(estudiantes));

// Calcula la nota media de toda la clase.

const calcularMedia = (listaDeEstudiantes) => {
  let sumaTotal = 0;

  for (let i = 0; i < listaDeEstudiantes.length; i++) {
    sumaTotal += listaDeEstudiantes[i].nota;
  }
  return sumaTotal / listaDeEstudiantes.length;
};

console.log(calcularMedia(estudiantes));

// Ordena los estudiantes de mayor a menor calificación.

const ordenarDescendente = (listaDeEstudiantes) =>
  listaDeEstudiantes.sort((a, b) => b.nota - a.nota);

console.log(ordenarDescendente(estudiantes));
