const {
  alumnos,
  agregarAlumno,
  calcularPromedio,
  filtrarAprobados,
  ordenarPorPromedio,
  buscarPorNombre,
} = require("./alumnos.js");

console.log(agregarAlumno("Andrea", [10, 9, 10, 10]));

console.log(alumnos);

console.log(calcularPromedio());

console.log(filtrarAprobados(calcularPromedio(alumnos)));

console.log(ordenarPorPromedio(calcularPromedio(alumnos)));

console.log(buscarPorNombre("Andrea"));
